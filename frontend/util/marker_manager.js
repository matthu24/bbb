export default class MarkerManager{
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  //all benches are passed here
  //let's loop through them
  updateMarkers(benches){
    //benches is an object
    for(let id in benches){
      if(!this.markers[id]){
        //bench is not in this.markers yet
        this.markers[id] = benches[id]
        this.createMarkerFromBench(benches[id])
      }
    }
    console.log(this.markers)
  }

  createMarkerFromBench(bench){


    let marker = new google.maps.Marker({
     position: {lat: bench.lat, lng: bench.lng},
    //  draggable: true,

     title: bench.description
    });
    marker.setMap(this.map)
    marker.addListener('click', toggleBounce);
    function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){
        marker.setAnimation(null);
      },3300)
    }
    }


  }
}

//
// For each bench, if the id is not a key in this.markers, create a new marker from it and add it to the map and this.markers
// Add the following helper methods:
//
// createMarkerFromBench(bench): accepts a bench object as an argument; adds a marker to the map and to the markers object
