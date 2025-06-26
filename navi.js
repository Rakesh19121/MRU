function getloc() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }else {
     console.log(" not supported ");
  }
}
function showPosition(position) {
    
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log("Latitude: " + lat + ", Longitude: " + long);
  document.getElementById("location").innerHTML = "Latitude: " + lat + ", Longitude: " + long;  
}
function showError(error) {
  console.log(error);
}
