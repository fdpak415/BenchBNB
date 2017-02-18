export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(benches){
   this.benches = benches;

   this._benchesToAdd().forEach(this._createMarkerFromBench);
   this._markersToRemove().forEach(this._removeMarker);

   }



 _benchesToAdd() {
   const currentBenches = this.markers.map( marker => marker.benchId );
   return this.benches.filter( bench => !currentBenches.includes(bench.id) );
 }

 _createMarkerFromBench(bench) {
   const pos = new google.maps.LatLng(bench.lat, bench.lng);
   const marker = new google.maps.Marker({
     position: pos,
     map: this.map,
     benchId: bench.id
   });
   this.markers.push(marker)
 }

 _markersToRemove() {
   const benchIds = this.benches.map(bench => bench.id);
   return this.markers.filter( marker => !benchIds.includes(marker.benchId));
 }

 _removeMarker(marker) {
   const idx = this.markers.indexOf(marker);
   this.markers[idx].setMap(null);
   this.markers.splice(idx, 1);
 }
}
