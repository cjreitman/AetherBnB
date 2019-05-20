import './spot_map.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from './../../util/marker_manager';
import _ from 'lodash';

const google = window.google;

class SpotMap extends React.Component {

  componentDidMount() {
    let mapOptions = {
      center: this.props.searchParams.location,
      zoom: 14
    };

    let map = this.refs.map;
    window.map = this.map = new google.maps.Map(map, mapOptions);
    window.markerManager = this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
    this.map.addListener('bounds_changed', () => {
      let mapBounds = this.map.getBounds();
      let southWest = mapBounds.getSouthWest();
      let northEast = mapBounds.getNorthEast();
      let bounds = { sw: { lat: southWest.lat(), lng: southWest.lng() }, 
      ne: { lat: northEast.lat(), lng: northEast.lng() }};
      this.props.receiveBounds(bounds);

      let location = this.map.getCenter();
      this.props.receiveLocation(location);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.searchParams.location, this.props.searchParams.location)) {
      this.MarkerManager.updateMarkers(this.props.spots);
    } 
  }

  render() {
    return (
    <div id="map-container" ref="map"> </div>
    );
  }
  
}


export default withRouter(SpotMap);