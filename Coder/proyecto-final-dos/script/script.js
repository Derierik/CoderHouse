const table = document.getElementById("demo");

function getLocation() {
    if (navigator.getLocation){
        navigator.getLocation.getCurrentPosition(showPosition);
    }
    else
    {
        table.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    table.innerHTML = "Latitude: " + position.coords.latitude + "<br>Logitude: " + position.coords.longitude;
}