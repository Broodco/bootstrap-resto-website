function initMap() {
    // The location of BeCentral
    let beCentral = {lat: 50.845499, lng:4.357356};
    // The map, centered at BeCentral
    let map = new google.maps.Map(
        document.querySelector('#mapCent'), {zoom: 16, center: beCentral});
    // The marker, positioned at BeCentral
    let marker = new google.maps.Marker({position: beCentral, map: map});
}