# [AetherBnB](https://aetherbnb1.herokuapp.com)

AetherBnB, is an AiBnB clone that enables users to book vacation rentals and view available spots on a responsive map/list of properties.

# Technologies

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org)
* [Redux.js](https://redux.js.org)
* [Node.js](https://nodejs.org/)

# Images

![image](https://user-images.githubusercontent.com/46357004/59390340-fa662e00-8d3e-11e9-95e5-fbf1a5885edc.png)

The splash page.


![image](https://user-images.githubusercontent.com/46357004/59390474-5df05b80-8d3f-11e9-82a4-3025279daaf1.png)

The sign-up/login modal.


![image](https://user-images.githubusercontent.com/46357004/59390371-0ce06780-8d3f-11e9-8f4b-748e9327d473.png)

The search bar, integrating our MongoDB database and Google's Geocoding functionality.


![image](https://user-images.githubusercontent.com/46357004/59390406-22ee2800-8d3f-11e9-8d14-795029697828.png)

The standard spot-viewing homepage.


![image](https://user-images.githubusercontent.com/46357004/59390439-39947f00-8d3f-11e9-8284-91bd91aab8eb.png)

AirBnB's own published date-range-picker.


![image](https://user-images.githubusercontent.com/46357004/59390464-4f09a900-8d3f-11e9-96c3-7bebe98b8d8a.png)

The toggle deactivates the map and responsively changes the presentation and orientation of avaiable spots.


![image](https://user-images.githubusercontent.com/46357004/59390507-7f514780-8d3f-11e9-8331-13d460b91156.png)

The map markers are clickable and reveal specific information about the selected spot.

# Code Highlights

```js
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
```
* Implementing the Google map component, with logic for handling refreshes based on the changing of the bounds of the map.

```js  handleSelect = address => {
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

```
* Incorporating Google's geocoding functionality into a React search bar and refining the behavior of the Google Map component to update the bounds and associated spots.

## Authors

* **Colin Reitman**
* **Trevor Steer**
* **Valery Nguyen**
* **Shannon Piesinger**
