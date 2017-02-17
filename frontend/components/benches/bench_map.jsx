import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

if (this.props.singleBench) {
  let _mapOptions = {
    center: {lat: this.props.bench.lat, lng: this.props.bench.lng},
    zoom: 13,
    draggable: false
  }
} else {
  let _mapOptions = {
    center: {lat: 37.773972, lng: -122.431297},
    zoom: 13
  };
}

class BenchMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map)
    if (singleBench) {
      this.MarkerManager.updateMarkers(this.props.bench);
    } else {
        this.MarkerManager.updateMarkers(this.props.benches);
        this._registerListeners();
        this._registerClick();
      }

    }


  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const {north, south, east, west} = this.map.getBounds().toJSON();
      const newBounds = {northEast: {lat: north, lng: east},
                         southWest: {lat: south, lng: west}}
      this.props.updateFilter('bounds', newBounds);
    })
  }

  _registerClick() {
    google.maps.event.addListener(this.map, 'click', (event) => {
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();
      const coords =  {lat: latitude, lng: longitude}
      this._handleClick(coords);
    })
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  render() {
    return (

      <div id="map-container" ref="map"></div>
    )
  }
}

export default withRouter(BenchMap);
