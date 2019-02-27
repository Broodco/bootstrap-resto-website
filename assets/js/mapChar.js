function initMap() {
    // The location of Charleroi
    let Charleroi = {lat: 50.845499, lng:4.357356};
    // The map, centered at Charleroi
    let map = new google.maps.Map(
        document.querySelector('#mapChar'), {zoom: 16, center: Charleroi});
    // The marker, positioned at Charleroi
    let marker = new google.maps.Marker({position: Charleroi, map: map});
}
