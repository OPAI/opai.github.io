google.maps.event.addDomListener(window, 'load', init);

  function init() {
    var ifba = new google.maps.LatLng(-12.963733, -38.5007699);
    var panoramaOptions = {
	  position: ifba,
	  pov: {
	  heading: 33.42,
	  pitch: 15
        }
    };
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
  } 
