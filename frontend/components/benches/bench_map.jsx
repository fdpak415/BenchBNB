import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';


class BenchMap extends React.Component {
  constructor(props) {
    super(props);

    this.mapOptions = this.mapOptions.bind(this);
  }

  mapOptions() {
    if (typeof this.props.singleBench === 'undefined') {
      return {
        center: {lat: 37.773972, lng: -122.431297},
        zoom: 13
      }
    } else {

      return {
      center: {lat: this.props.bench.lat, lng: this.props.bench.lng},
      zoom: 13,
      draggable: false
      }
    }
  }

  componentDidMount() {
    const map = this.refs.map;
    const benchId = this.props.benchId
    this.map = new google.maps.Map(map, this.mapOptions());
    this.MarkerManager = new MarkerManager(this.map)

      if (this.props.singleBench) {
        this.props.fetchBench(benchId);
      } else {
        this._registerListeners();
        this._registerClick();
      }
    }


  componentDidUpdate() {
    if (this.props.singleBench) {
      this.MarkerManager.updateMarkers([this.props.benches[Object.keys(this.props.benches)[0]]]);
    } else {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
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
