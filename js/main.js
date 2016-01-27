/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$( document  ).ready(function() {
	$( "#iPicture" ).iPicture();
// 	I think I like the non-popup better?
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// 	place holder for LL to pull tile
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

//Open street map layer	
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var terrainUrl = 'http://tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg'
var terrainAttrib = "Test"
var terrain = new L.TileLayer(terrainUrl, {minZoom: 8, maxZoom: 18, attribution: terrainAttrib});

var topoUrl = "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png"
var topoAttrib = "Topo"
var topo = new L.TileLayer(topoUrl, {minZoom: 8, maxZoom: 18, attribution: topoAttrib});
//Satelite layer
var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});
//Drawing layer
var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});
	
// define layers
var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm,
		"Terrain View": terrain,
		"Topographic View": topo
} 

//Set view of map
var map = L.map('map-container').setView([46.852, -121.760], 10);
// Layer control box
L.control.layers(mapLayers).addTo(map);
satLayer.addTo(map);

var markerPeak = L.marker([46.852, -121.760]).addTo(map);

markerPeak.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
var markerParadise = L.marker([46.790, -121.740]).addTo(map);
markerParadise.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
var markerSunrise = L.marker([46.750, -121.810]).addTo(map);
	markerSunrise.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
var markerLongmire = L.marker([46.910, -121.640]).addTo(map);
	markerLongmire.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
// 	Add links to web cams
// Carbon riverLatitude: 46.9948269
// Longitude: -121.9153839
	// Paradise (46.79°N 121.74°W[18]) 
// Longmire (46.75°N 121.81°W)
// Sunrise (46.91°N 121.64°W)
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
});
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

// var marker = L.marker([46.852, -121.760]).addTo(map);
// marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
