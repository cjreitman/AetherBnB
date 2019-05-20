const google = window.google;

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.removeMarker = this.removeMarker.bind(this);
    this.updateInfoWindow = this.updateInfoWindow.bind(this);
    this.infoWindow = new google.maps.InfoWindow({});
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => spotsObj[spot._id] = spot);

    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));

    spots
      .filter(spot => !this.markers[spot._id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot));
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }

  updateInfoWindow(content, marker) {
    this.infoWindow.setContent(content);
    this.infoWindow.open(this.map, marker);
  }

  createMarkerFromSpot(spot) {
    const position = { lat: spot.lat, lng: spot.lng };
    var contentString =
      `<a href="/#/spot/${spot._id}">` +
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div >" +
      `<img style="max-height: 120px; max-width: 200px;" alt="" src=${
        spot.images[0].img_url
      }>` +
      `<h1 id="firstHeading" class="firstHeading" style="max-width: 200px; word-break: break-word;"><b>${
        spot.name
      }</b></h1>` +
      '<div id="bodyContent">' +
      `<p>$${spot.price} per night</p>` +
      "</div>" +
      "</div>" +
      '</a>';
 

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      label: {
        text: `$${spot.price}`,
        fontSize: "9px",
        fontWeight: "bold"
      },
      spotId: spot._id
    });

    marker.addListener("click", () => {
      this.updateInfoWindow(contentString, marker);
    });
    this.markers[marker.spotId] = marker;
  }

}