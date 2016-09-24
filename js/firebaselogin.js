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
  // alert(result);
  
  localStorage.clear();
  localStorage.setItem("result", JSON.stringify(result));
  localStorage.setItem("resultName", JSON.stringify(result.user.displayName));
  
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
    
  }

  // The signed-in user info.
  var user = result.user;
  name = localStorage.getItem("resultName");
   
      //appending to page
   $('#experiment').append("<h2>" + name + " reporting for duty!<h2>");
   var url = "../project.html";
   window.location = url;
 
     //blocked this out just to test above code
 // $('#experiment').append(JSON.stringify(result));

}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});
}

function logout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
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
  
  console.log(localStorage.getItem("result")); //worked
  console.log(localStorage.getItem("resultName"));