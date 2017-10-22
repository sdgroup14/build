<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Cевериновка: контакты</title>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
    <style>
        body, html{
        	width: 100%;
            margin: 0px;
            height: 100%;
        }

        #dir-map {
            display: block;
            width: 1280px;
            height: 640px;
            margin: 20px auto;
        }

    </style>
</head>
<body>
<a id="gmapLink" href="https://www.google.com.ua/maps/dir/50.4474613,30.2409422/Коттеджный+городок+Севериновка,+Киевская+область/@50.4225832,30.0322622,12z">Смотреть на GoogleMap</a>
<div id="dir-map"></div>
<script>
function initMap() {
    var directionsDisplay;
    var directionsService;
    var directionsMap;
    var startCoords = {lat: false, lng: false};
    var endCoords = {lat: 50.3971129, lng: 29.9776504};
    var kyivCoords = {lat: 50.4474833, lng: 30.2409454};
    var kyiv = new google.maps.LatLng(kyivCoords);
    var start = kyiv;
    var end = new google.maps.LatLng(endCoords);
    var distanceInfo = {lat: 50.437127, lng: 30.111913};

    console.log(startCoords);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            startCoords = {lat: position.coords.latitude, lng: position.coords.longitude};
        });
    } else {
        alert('Ваш браузер не поддерживает геолокацию');
    }

    if (startCoords.lat != false){
        start = new google.maps.LatLng(startCoords);
        document.querySelector('#gmapLink').href = 'https://www.google.com.ua/maps/dir/'+startCoords.lat+','+startCoords.lng+'/Коттеджный+городок+Севериновка,+Киевская+область';
    } else {
        start = new google.maps.LatLng(kyivCoords);
    }

    console.log(startCoords);

    function getDirection() {
        var mapOptions = {
            zoom: 11,
            center: start,
            gestureHandling: 'cooperative',
            mapTypeControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER,
                style: google.maps.ZoomControlStyle.LARGE
            },
            fullscreenControl: false,
            streetViewControl: false
        };
        directionsMap = new google.maps.Map(document.getElementById('dir-map'), mapOptions);

        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer({
          draggable: true,
          map: directionsMap,
          suppressMarkers: true
        });

        directionsDisplay.addListener('directions_changed', function() {
            // This is where you would do your custom processing
            computeTotalDistance(directionsDisplay.getDirections());
        });

        calcRoute();
    }

    function displayRoute(start, end, service, display) {
        service.route({
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                display.setDirections(response);
            } else {
                alert('Could not display directions due to: ' + status);
            }
        });
    }

    function computeTotalDistance(result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
        console.log(total + ' км');
        var infoWindow = new google.maps.InfoWindow({map: directionsMap});
        infoWindow.setPosition(kyivCoords);
        infoWindow.setContent(total + ' км');
    }

    function calcRoute() {
      var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
      };
      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
          new google.maps.Marker({
              position: startCoords,
              map: directionsMap,
              icon: '/markerUser.png',
              title: 'Это Вы'
          });
          new google.maps.Marker({
              position: endCoords,
              map: directionsMap,
              icon: '/markerSeverynivka.png',
              title: 'Севериновка'
          });
      });
    }

    getDirection();
}
</script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbuSjSAIif0CB0GNuob2bfG1jd1y9FdxE&language=uk&region=UA&callback=initMap"></script>
</body>
</html>
