function initialize() {
		var mapProp = {
    				center:new google.maps.LatLng(50.72442,-3.53097),
				zoom:15,
    				mapTypeId:google.maps.MapTypeId.ROADMAP
				 };
  		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff4400"
            },
            {
                "saturation": -68
            },
            {
                "lightness": -4
            },
            {
                "gamma": 0.72
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0077ff"
            },
            {
                "gamma": 3.1
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#44ff00"
            },
            {
                "saturation": -23
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -64
            },
            {
                "hue": "#ff9100"
            },
            {
                "lightness": 16
            },
            {
                "gamma": 0.47
            },
            {
                "weight": 2.7
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": -48
            },
            {
                "hue": "#ff5e00"
            },
            {
                "gamma": 1.2
            },
            {
                "saturation": -23
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00ccff"
            },
            {
                "gamma": 0.44
            },
            {
                "saturation": -33
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#007fff"
            },
            {
                "gamma": 0.77
            },
            {
                "saturation": 65
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "gamma": 0.11
            },
            {
                "weight": 5.6
            },
            {
                "saturation": 99
            },
            {
                "hue": "#0091ff"
            },
            {
                "lightness": -86
            }
        ]
    }

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
