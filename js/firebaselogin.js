 var config = {
   apiKey: "AIzaSyABtGUoDn3GvxXrfRA-bQKLrulCYCoHd_E",
   authDomain: "littlebrother-67da5.firebaseapp.com",
   databaseURL: "https://littlebrother-67da5.firebaseio.com",
   storageBucket: "",
   messagingSenderId: "194837337033"
  };
  firebase.initializeApp(config);

// Variable to reference the database
var database = firebase.database();

var logged = false;
var res = "";


 var provider = new firebase.auth.FacebookAuthProvider();

function login(){
  firebase.auth().signInWithRedirect(provider);

  firebase.auth().getRedirectResult().then(function(result) {
    // alert(result.user.displayName);
    console.log(result);
    console.log(result.user.displayName);
  
  // localStorage.clear();
  // localStorage.setItem("result", JSON.stringify(result));
  // localStorage.setItem("resultName", JSON.stringify(result.user.displayName));
  
  // if (result.credential) {
  //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //   var token = result.credential.accessToken;
  //   // ...
    
  // }

  // // The signed-in user info.
  // var user = result.user;
  // name = localStorage.getItem("resultName");
   
  //     //appending to page
  //  $('#experiment').append("<h2>" + name + " reporting for duty!<h2>");
   var url = "../project.html";
   window.location = url;
 
     //blocked this out just to test above code
 // $('#experiment').append(JSON.stringify(result));

// }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });
}
}

function logout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  //redirect to login page when logged out
  var url2 = "../index.html";
  window.location = url2;
}, function(error) {
  console.log(error.code);
});
}


$('#login').on('click', function(){
  login();
  logged=true;
});

$('#logout').on('click', function(){
  logout();
  // Empty the "You are logged in" div
  logged=false;
});
  
  // console.log(localStorage.getItem("result")); //worked
  // console.log(localStorage.getItem("resultName"));

  //time functions
  //time and date stamp
  //refer to timestamp2.html

//geolocation need API key in script tag
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
//need to add script tag for map in html


