<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, maximum-scale=1">
    <meta http-equiv="cleartype" content="on">
    <title>Cеверинiвка: котеджне містечко</title>
    <meta name="keywords" content="северинiвка, котедж, котеджне містечко, северинiвка котедж, таунхаус, купити будинок, купити котедж,  купити таунхаус, котеджі під Києвом, будинок за містом, котеджне містечко під Києвом, будинки за містом, котедж під Києвом">
    <meta name="description" content="Северинівка – це краса природи та чисте повітря. Це неймовірно гармонійне поєднання міських інфраструктурних елементів з абсолютно безтурботним заміським життям. Це ваша безпека, комфорт та спокій. Це щасливе дитинство ваших дітей. Це повна реалізація ваших мрій вже зараз.">

    <!-- FAVICON -->
  <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  <link rel="manifest" href="/favicon/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css">
  
  <!-- build:remove -->
  <link href="css/style.css" rel="stylesheet">
  <!-- /build -->
  <!-- build:include ../templates/css-link.html -->

  <!-- /build -->
  <!--[if lt IE 9]>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js"></script>
  <![endif]-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108080768-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-108080768-1');
    </script>
</head>

<body>
    <div class="content">
    <?php include __DIR__ . '/views/templates/menu.html'; ?>
    <?php include __DIR__ . '/views/templates/header.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s1.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s2.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s3.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s4.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s5.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s6.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s7.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s8.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s9.html'; ?>
    <?php include __DIR__ . '/views/pages/index/s10.html'; ?>
    <?php include __DIR__ . '/views/templates/footer.html'; ?>
    <?php include __DIR__ . '/views/templates/type-popup.html'; ?>
    <div class="call-btn-container">
      <div class="call-content-wrapper">
        <div class="call-content">
          <input id="msgName" class="call-inp" type="text" placeholder="Ваше им'я" />
          <input id="msgPhone" class="call-inp" type="tel" placeholder="+38  (___)  ___ - __ - __" />
          <span class="call-close">відмінити</span>
        </div>
        <div id="callmsg" class="call-ico">
          <svg class="icon-box svg-ico-call" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <use xlink:href="img/sprite.svg#call"></use>
          </svg>
          <span class="call-btn-txt">замовити дзвінок</span>
        </div>
      </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js"></script>

  <!-- build:remove -->
  <script src="js/lib/jquery.panzoom.min.js"></script>
  <script type="text/javascript" src="js/events.js"></script>
  <!-- /build -->
  <!-- build:include ../templates/js-script.html -->
  <!-- /build -->

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbuSjSAIif0CB0GNuob2bfG1jd1y9FdxE&language=uk&region=UA&callback=initMap"></script>
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
                directionsMap = new google.maps.Map(document.getElementById('map'), mapOptions);

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
                infoWindow.setContent(total + ' км<br />до Києва');
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
                        icon: '/img/markerUser.png',
                        title: 'Это Вы'
                    });
                    new google.maps.Marker({
                        position: endCoords,
                        map: directionsMap,
                        icon: '/img/markerSeverynivka.png',
                        title: 'Севериновка'
                    });
                });
            }

            getDirection();
        }
    </script>
</body>
</html>
