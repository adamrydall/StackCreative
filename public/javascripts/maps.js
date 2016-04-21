function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {
            lat: 44.4120704,
            lng: -79.6699187
        }
    });
    var geocoder = new google.maps.Geocoder;
    var infoWindow = new google.maps.InfoWindow({
        map: map
    });
    tryGeolocate();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeLatLng(geocoder, map, infoWindow);
    });
}

function geocodeLatLng(geocoder, map, infowindow) {
    var input = document.getElementById('latlng').value;
    var latlngStr = input.split(',', 2);
    var latlng = {
        lat: parseFloat(latlngStr[0]),
        lng: parseFloat(latlngStr[1])
    };
    console.log(input);
    geocoder.geocode({
        'location': latlng
    }, function(results, status) {
        console.log(results);
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[3]) {
                map.setCenter(latlng);
                map.setZoom(11);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
                infowindow.setContent(results[3].formatted_address);
                infowindow.open(map, marker);
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });

}

function tryGeolocate() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            document.getElementById('latlng').value = pos['lat'] + ',' + pos['lng'];
            document.getElementById('submit').click();
        }, function() {
            handleLocationError(true, infowindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infowindow, map.getCenter());
    }
}
