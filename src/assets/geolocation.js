const $ = require('jquery');

var lat, lng, map;

(function(){
  function initMap(lat, lng){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      zoom: 15
    });
  }

  $.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCUtDeo_beNeQVjrz4QQVDnbmL6_mKgYzs', (data) => {
    lat = data.location.lat;
    lng = data.location.lng;
    initMap(lat, lng);
  })
})();


var s = document.createElement('script');
s.type = 'text/javascript';
s.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUtDeo_beNeQVjrz4QQVDnbmL6_mKgYzs"
s.async = true
s.defer = true
$("head").append(s)
