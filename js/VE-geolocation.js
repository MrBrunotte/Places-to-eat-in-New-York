let map = null;

function initMap() {
    let location = new Object();        //Generic holding place
    navigator.geolocation.getCurrentPosition(function (pos) {       //this is the geolocation to see where the user is!
        location.lat = pos.coords.latitude;
        location.long = pos.coords.longitude;

        // create map
        map = new google.maps.Map(document.getElementById('map'), { // this sets the map in the <div id="map">
            center: { lat: location.lat, lng: location.long },      // center over the getCurrentPosition function!
            zoom: 15
        });
        getBars(location);
        getHotels(location);
        getRestaurants(location);           //calling the function to get restaurant locations on the map
        //getHotel(location);
    });
}

/* Function to find restaurant locations within a 3000 meter radius*/
function getBars(location) {
    var pyrmont = new google.maps.LatLng(location.lat, location.long);
    var requestBar = {
        location: pyrmont, // created above
        radius: '2000',
        type: ['bar']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(requestBar, callback);
}

function getHotels(location) {
    var pyrmont = new google.maps.LatLng(location.lat, location.long);
    var requestHotel = {
        location: pyrmont, // created above
        radius: '2000',
        type: ['hotel']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(requestHotel, callback);
}

function getRestaurants(location) {
    var pyrmont = new google.maps.LatLng(location.lat, location.long);
    var requestRest = {
        location: pyrmont, // created above
        radius: '2000',
        type: ['restaurant']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(requestRest, callback);
}


/* Function to create the search result: where is the restaurant, what price and rating*/
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            let price = createPrice(place.price_level);
            let content = `<h4>${place.name}</h4>
            <h5>${place.vicinity}</h5>
            <p>Price: ${price}</br>
            Rating: ${place.rating}`;

            var marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name,
                type: ['restaurant'],
                icon: 'http://maps.google.com/mapfiles/kml/pal2/icon55.png' //restaurant
            });

            var infowindow = new google.maps.InfoWindow({
                content: content
            });

            /* I want to add this!
            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        let price = createPrice(place.price_level);
                        let content = `<h4>${place.name}</h4>
                        <h5>${place.vicinity}</h5>
                        <p>Price: ${price}</br>
                        Rating: ${place.rating}`;

                        var marker = new google.maps.Marker({
                            position: place.geometry.location,
                            map: map,
                            title: place.name,
                            type: ['bar'],
                            icon: 'http://maps.google.com/mapfiles/kml/pal2/icon19.png', //cocktail
                        });

                        function callback(results, status) {
                            if (status == google.maps.places.PlacesServiceStatus.OK) {
                                for (var i = 0; i < results.length; i++) {
                                    var place = results[i];
                                    let price = createPrice(place.price_level);
                                    let content = `<h4>${place.name}</h4>
                                    <h5>${place.vicinity}</h5>
                                    <p>Price: ${price}</br>
                                    Rating: ${place.rating}`;

                                    var marker = new google.maps.Marker({
                                        position: place.geometry.location,
                                        map: map,
                                        title: place.name,
                                        type: ['hotel'],
                                        icon: 'http://maps.google.com/mapfiles/kml/pal2/icon20.png', //hotel
                                    });
                                    */

            var infowindow = new google.maps.InfoWindow({
                content: content
            });

            bindInfoWindow(marker, map, infowindow, content);
            marker.setMap(map);
        }
    }
}

function bindInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function () {
        infowindow.setContent(html);
        infowindow.open(map, this);
    });
}

function createPrice(level) {
    if (level != "" && level != null) {
        let out = "";
        for (var x = 0; x < level; x++) {
            out += "$";
        }
        return out;
    } else {
        return "?";
    }
}
