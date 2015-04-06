function initialize() {
  var myLatlng = new google.maps.LatLng(59.93631143,30.32106936);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var image = 'img/marker.png';
  var myLatLng = new google.maps.LatLng(59.93631143,30.32106936);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}