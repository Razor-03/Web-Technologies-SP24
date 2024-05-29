mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: property.location.coordinates, // starting position [lng, lat]
	zoom: 12, // starting zoom
});

new mapboxgl.Marker()
.setLngLat(property.location.coordinates).addTo(map);