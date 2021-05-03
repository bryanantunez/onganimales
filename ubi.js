function iniciarMap() {
    var coord = { lat: -33.0336892, lng: -71.5331841 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}