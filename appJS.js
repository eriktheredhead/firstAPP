function getLocation() {
	if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
	}
}

function showLocation(position){

// 2. Hardcode your store location on line 12 and 13, and update the  comment on line 10 to reflect your McDuck's restaurant address
//  Complete Relief Dispensary @ 1669 Coal Creek Dr., Lafayette, CO

var mcduckslat=39.9830068;
var mcduckslon=-105.0954636;

// current location
var currentpositionlat=position.coords.latitude;
var currentpositionlon=position.coords.longitude;

// calculate the distance between current location & McDuck's location  
var distance=getDistanceFromLatLonInMiles(mcduckslat, mcduckslon,currentpositionlat,currentpositionlon);
  
// 3. Display the distance using a JavaScript alert(). Comment out the line with two // after you confirm the distance is correct.
//alert(distance);
  
// 4. Create if-else trigger using an alert()
if (distance < 2) {
  document.getElementById("effect").innerHTML="<img src='https://i.imgur.com/vLk8Vj6.jpg'/>";
}
  else{
    alert("No trees for you nephew");
  }

  
// Displays the location using .innerHTML method and the lat & long coordinates for your current location
document.getElementById("geodisplay").innerHTML="Latitude: " + currentpositionlat + "<br>Longitude: " + currentpositionlon;
}  
    
// Haversine distance formula
 function getDistanceFromLatLonInMiles(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c * 0.621371; // Distance in miles
  return d;
 }

 function deg2rad(deg) {
  return deg * (Math.PI/180)
 }
