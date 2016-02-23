function initialize() {
		var mapProp = {
    				center:new google.maps.LatLng(50.72442,-3.53097),
				zoom:15,
    				mapTypeId:google.maps.MapTypeId.ROADMAP
				 };
  		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  		
  		//testing stop draggable
  		
  		map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
  		
  		//end test draggable
  		
  		var marker = new google.maps.Marker({
    		position: {lat: 50.72295, lng: -3.52908},
    		map: map,
    		title: 'Tea on the Green'
		  });
		  
		var marker = new google.maps.Marker({
    		position: {lat: 50.72483, lng: -3.52804},
    		map: map,
    		title: 'Artigiano'
		  });  
		  
		var marker = new google.maps.Marker({
    		position: {lat: 50.72040, lng: -3.53503},
    		map: map,
    		title: 'The Glorious Arthouse Cafe'
		  });  
		  
		var marker = new google.maps.Marker({
    		position: {lat: 50.72171, lng: -3.52705},
    		map: map,
    		title: 'Rendezvous Wine Cellar'
		  }); 
		
		var marker = new google.maps.Marker({
    		position: {lat: 50.72651, lng: -3.52461},
    		map: map,
    		title: 'Monkey Suit'
		  }); 
		
		var marker = new google.maps.Marker({
    		position: {lat: 50.72671, lng: -3.52799},
    		map: map,
    		title: 'The Old Firehouse'
		  }); 
		  
		var marker = new google.maps.Marker({
    		position: {lat: 50.72087, lng: -3.53399},
    		map: map,
    		title: 'The Fat Pig'
		  }); 
		
		var marker = new google.maps.Marker({
    		position: {lat: 50.72597, lng: -3.53330},
    		map: map,
    		title: 'Tabac'
		  }); 
		  
			}
		google.maps.event.addDomListener(window, 'load', initialize);
		


var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "Pause";
	} else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
	}
})
