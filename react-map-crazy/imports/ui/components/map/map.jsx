import React from 'react';
import { Meteor } from 'meteor/meteor';

import './map.css';

import Maps from '../../../api/maps/maps.js';

let maps = new Maps();

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'map': null,
      'markerNumber': 0
    };
  }

  componentDidMount() {
    let mapData = {
      'component': this,
      'mapSelectorID': 'map',
      'mapOptions': {
        'zoom': this.props.mapZoom,
        'zoomControl': false,
        'scaleControl': false,
        'scrollwheel': false,
        'disableDoubleClickZoom': true,
        'center': new google.maps.LatLng(0, 0)
      }
    };
    maps.initMap(mapData, (map) => {
      setInterval(() =>{
        let randomeMarkerData = {
          'markerData' : {
            'position': {
              'lat': Math.random() * 360 - 180,
              'lng': Math.random() * 360 + 180
            },
            'title': `Random Marker #${this.state.markerNumber}`,
            'map': this.state.map || map
          },
          'component': this
        }
        maps.generateRandomMarker(randomeMarkerData);
      }, Meteor.settings.public.timeoutRepeat);
    });

  }

  render() {
    return (
      <div>
        <div id="map"></div>
      </div>
    )
  }
}

Map.propTypes = {
  'mapZoom': React.PropTypes.number
}

Map.defaultProps = {
  'mapZoom': 3
};
