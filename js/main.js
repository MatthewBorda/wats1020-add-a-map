/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$( document  ).ready(function() {
	$( "#iPicture" ).iPicture();
  var map = L.map('map', {
    center: [46.8529, -121.7604],
    zoom: 13
});
L.tileLayer('https://api.mapbox.com/styles/v1/matthewmborda/cijt62sxg00938zkqirobk93q.html?title=true&access_token=pk.eyJ1IjoibWF0dGhld21ib3JkYSIsImEiOiJjaWp0NXRhd2Ywa2JidW9seDlvNWFvMG41In0.EydtNiNzSblstHwBX_MIdQ#9.82/46.852900000000005/-121.76039999999998/0', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'matthewmborda',
    accessToken: 'pk.eyJ1IjoibWF0dGhld21ib3JkYSIsImEiOiJjaWp0NXRhd2Ywa2JidW9seDlvNWFvMG41In0.EydtNiNzSblstHwBX_MIdQ'
}).addTo(map);
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
});
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

