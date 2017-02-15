import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297},
  zoom: 13
};

class BenchMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(this.props.benches);

    this._registerListeners();
    }

    _registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const {north, south, east, west} = this.map.getBounds().toJSON();
        const newBounds = {northEast: {lat: north, lng: east},
                           southWest: {lat: south, lng: west}}
        this.props.updateBounds(newBounds);
      })
    }


  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (

      <div id="map-container" ref="map"></div>
    )
  }
}

export default withRouter(BenchMap);
