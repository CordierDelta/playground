export default class Maps {
  initMap(options, callback) {
    if (!_.isObject(options)) {
      console.warn("initMap method needs an object in order to work");
      return;
    };

    let map = new google.maps.Map(document.getElementById(options.mapSelectorID), options.mapOptions);

    if (options.component) {
      options.component.setState({
        'map': map
      })
    };

    return typeof callback === 'function' && callback(map);
  }

  generateRandomMarker(options) {
    if (!_.isObject(options)) {
      console.warn("initMap method needs an object in order to work");
      return;
    };

    let marker = new google.maps.Marker(options.markerData);

    if (options.component) {
      options.component.setState({
        'markerNumber': options.component.state.markerNumber++
      })
    };
  }
}
