import React from "react";
import { withRouter } from "react-router-dom";
import { SpotIndexItem } from './spot_index_item';
import MapContainer from './../map/spot_map_container';

class Spots extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
    this.props.receiveSearchStatus(true);
  }

  isMapActive() {
    let outerSpotsDiv = document.getElementById("outer-spots-div");
    let list = document.getElementById("spots-results-list");

    if (this.props.mapIsActive) {
      if (outerSpotsDiv && !outerSpotsDiv.classList.contains("spots-index-map-active")) {
        outerSpotsDiv.classList.add("spots-index-map-active");
        list.classList.add("spots-results-list-column");
        list.classList.remove("spots-results-list");
      }
      return <MapContainer/>
    } else {
      if (outerSpotsDiv && outerSpotsDiv.classList.contains("spots-index-map-active")) {
        outerSpotsDiv.classList.remove("spots-index-map-active");
        list.classList.add("spots-results-list");
        list.classList.remove("spots-results-list-column");
        
      }
    }
  }

  render() {

    return (
      <div className="spots-and-map-div">
        <div id="outer-spots-div" className="outer-spots-div">
          <h2 id="spots-list-header">
            Explore all {this.props.spots.length} homes
          </h2>
          <div id="spots-list-container">
            <ul id="spots-results-list" className="spots-results-list">
              {this.props.spots.map(spot => (
                <SpotIndexItem spot={spot} key={spot._id} mapIsActive={this.props.mapIsActive} />
              ))}
            </ul>
          </div>
        </div>

     
          {this.isMapActive()}


      </div>
    );
  }
}

export default withRouter(Spots);
