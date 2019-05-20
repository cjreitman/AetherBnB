import React from 'react';
import FormOptions from './form_options';
import { withRouter } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './auto_complete.css';
import _ from 'lodash';

const google = window.google;

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ''};
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.activeSearch, this.props.activeSearch)) {
      if (!window.preventFetch) {
        const inputEl = document.getElementById("header-search-input");
        let options = {
          bounds: this.props.activeSearch.bounds,
          searchText: inputEl.value,
          startDate: this.props.activeSearch.startDate,
          endDate: this.props.activeSearch.endDate,
          guestCount: this.props.activeSearch.guestCount,
          priceRange: this.props.activeSearch.priceRange
        };
        this.props.fetchSpots(options);
        if (
          this.props.history.location.pathname !== "/spots" &&
          this.props.activeSearch.active === true
        ) {
          this.props.history.push(`/spots`);
        }
      } else {
        window.preventFetch = false;
        const inputEl = document.getElementById(
          "header-search-input"
        );
        let options = {
          bounds: this.props.activeSearch.bounds,
          searchText: inputEl.value,
          startDate: this.props.activeSearch.startDate,
          endDate: this.props.activeSearch.endDate,
          guestCount: this.props.activeSearch
            .guestCount,
          priceRange: this.props.activeSearch.priceRange
        };
        this.props.fetchSpots(options).then(() => {
          this.MarkerManager = window.markerManager;
          this.MarkerManager.updateMarkers(this.props.spots);
        });
        if (this.props.history.location.pathname !== "/spots") 
          this.props.history.push(`/spots`);
      }
    } else {
        if (window.markerManager) {
          this.MarkerManager = window.markerManager;
          this.MarkerManager.updateMarkers(this.props.spots);
        }

    }
  }

  handleChange = address => {
    this.setState({ address });
  }

  handleSelect = address => {
    this.setState({ address });
    if (window.map) {
      window.preventFetch = true;
      geocodeByAddress(address).then(results => {
        getLatLng(results[0]).then(({lat, lng}) => {
          window.locationObj = new google.maps.LatLng(lat, lng);
          window.map.panTo(window.locationObj);
        });
        this.activateSearch();
      });
    } else {
      window.preventFetch = false;
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          const location = latLng;
          this.props.receiveLocation(new google.maps.LatLng(location.lat, location.lng));
          this.activateSearch();
        })
        .catch(error => console.error('Error', error));
    }
    

  };

  activateSearch() {
    this.props.receiveSearchStatus(true);
    this.props.receiveMapIsActive(true);
  }

  render() {

    let options;
    if (this.props.activeSearch.active) {
      options = <div><FormOptions receiveMapIsActive={this.props.receiveMapIsActive} mapIsActive={this.props.activeSearch.mapIsActive}/></div>;
    }

    return (
      <div>
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
              <form onSubmit={(e) => {e.preventDefault();}}>
                <input id="header-search-input"
                  {...getInputProps({
                    placeholder: 'Search Spots ... (try San Francisco)',
                    className: 'location-search-input',
                  })}
                />
            </form>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {options}
      </div>
    );
  }
}

export default withRouter(AutoComplete);