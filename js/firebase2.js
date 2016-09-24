 var config = {
    apiKey: "AIzaSyDwkJ5tLnUssEbequ34dngUiO10XpOFfE0",
    authDomain: "trackify-69fee.firebaseapp.com",
    databaseURL: "https://trackify-69fee.firebaseio.com",
    storageBucket: "trackify-69fee.appspot.com",
    messagingSenderId: "1046243314292"
  };
  firebase.initializeApp(config);

var logged = false;
var res = "";


 var provider = new firebase.auth.FacebookAuthProvider();

function login(){
 firebase.auth().signInWithRedirect(provider);

 firebase.auth().getRedirectResult().then(function(result) {
  console.log(result);
  
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