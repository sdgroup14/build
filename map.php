<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="format-detection" content="telephone=no">
  <!-- <meta name="viewport" content="width=device-width, maximum-scale=1.0"> -->
  <meta name="viewport" content="width=device-width, maximum-scale=1">
  <!-- <meta name="viewport" content="width=device-width" /> -->
  <!-- <meta name="viewport" content=" maximum-scale=1"> -->
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
  <meta http-equiv="cleartype" content="on">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css">
  
  <!-- build:remove -->
  <link href="css/style.css" rel="stylesheet">
  <!-- /build -->
  <!-- build:include ../templates/css-link.html -->

  <!-- /build -->
  <!--[if lt IE 9]>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js"></script>
  <![endif]-->
  <title>Title</title>

  <style>
    .map-common {
      position: relative;

    }
    .red {
      position: absolute;
      background-color: red;
      width: 10px;
      height: 10px;
    }

  </style>
</head>

<body>



  <!-- <div class="content"> -->
    <div class="map-common">
      <img src="img/plan/plan_map.jpg" alt="">
      <div class="red"></div>
    </div>
<!--     <div class="call-btn-container">
      <div class="call-content-wrapper">
        <div class="call-content">
          <input class="call-inp" type="text" placeholder="Ваше имя" />
          <input class="call-inp" type="tel" placeholder="+38  (___)  ___ - __ - __" />
          <span class="call-close">отмена</span>
        </div>
        <div class="call-ico">
          <svg class="icon-box svg-ico-call" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <use xlink:href="img/sprite.svg#call"></use>
          </svg>
          <span class="call-btn-txt">Заказать звонок</span>
        </div>
      </div>
    </div> -->
  <!-- </div> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js"></script> -->
  
  
  <!-- build:remove -->
  <!-- <script src="js/lib/jquery.panzoom.min.js"></script> -->
  <!-- <script type="text/javascript" src="js/events.js"></script> -->
  <!-- /build -->
  <!-- build:include ../templates/js-script.html -->
  <!-- /build -->
  
  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"async defer></script> -->

  <script>
    var positions = [];
    $('.map-common').on('click', function(e){
      var x = e.offsetX==undefined?e.layerX:e.offsetX;
      var y = e.offsetY==undefined?e.layerY:e.offsetY;
    $('.red').css({
    'left': x,
    'top': y
  });

    var n = prompt('Сколько вам лет?', 100);

    // var pos = {
    //   "number": n,
    //   left: x,
    //   top: y
    // };




function markerPos(number, x, y){
    this.number = number;
    this.x = x;
    this.y = y;
}

positions.push(new markerPos(n, x, y));


    console.log(positions);
    })

// document.getElementById('div').onclick = function(e) {
//   var x = e.offsetX==undefined?e.layerX:e.offsetX;
//   var y = e.offsetY==undefined?e.layerY:e.offsetY;
//   alert(x +'x'+ y);
// }
  </script>
</body>
</html>
