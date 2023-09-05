<script initMap() {
        var map = new google.maps.Map(document.getElementById("masp"), {
            zoom: 3,
            center: {
                lat: 46.619261,
                lng: -33.134766
            }
        });

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
        { lat: 40.785091, lng: -73.968285},
        { lat: 41.785091, lng: -73.839290},
        { lat: 40.754932, lng: -73.257807}
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: label[i % labels.length]
            });
        });

        var markerCluster = new MarkerClusterer(map, markers, {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
    }

</script>
<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer.js"></script>
<script async defer src=""https://maps.googleapis.com/api/js?key=AIzaSyDDHHyac2SiOYPNYxXMK7rqJjnB8nCaaxE&callback=initMap></script>