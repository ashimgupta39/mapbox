mapboxgl.accessToken =
  "pk.eyJ1IjoiYXNoaW0yOSIsImEiOiJja2ZlYWVvNHgwMnprMzdwZWpyMzN0dnFpIn0.y7m5aUduOulRqszMWPfkTQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [76.7794, 30.7333],
  zoom: 12,
});
// var centre = [76.7794, 30.7333];
// var marker = new mapboxgl.Marker().setLngLat(centre).addTo(map);
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);
