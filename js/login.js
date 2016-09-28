/*
oooo                        o8o              
`888                        `"'              
 888   .ooooo.   .oooooooo oooo  ooo. .oo.   
 888  d88' `88b 888' `88b  `888  `888P"Y88b  
 888  888   888 888   888   888   888   888  
 888  888   888 `88bod8P'   888   888   888  
o888o `Y8bod8P' `8oooooo.  o888o o888o o888o 
                d"     YD                    
                "Y88888P'                    
*/

// Create an instance of the Facebook provider object:
var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('email');

//Authenticate with Firebase using the Facebook provider object.
function login(){
  //To sign in by redirecting to the sign-in page, call signInWithRedirect:
  //firebase.auth().signInWithRedirect(provider);
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);

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
  // Sign-out successful
  }, function(error) {
    console.log(error.code);
  });
}

// The recommended way to get the current user is by setting an observer on the Auth object. By using an observer, you ensure that the Auth object isn't in an intermediate state—such as initialization—when you get the current user. 
// When you use signInWithRedirect, the onAuthStateChanged observer waits until getRedirectResult resolves before triggering.

firebase.auth().getRedirectResult().then(function(result) {    
  // Save the User Name to Firebase
  firebase.database().ref('user').push({
    name: result.user.displayName
});

  //Retrieve the User Name from Firebase
firebase.database().ref('user').on("child_added", function(snapshot){
    console.log(snapshot.val().name);

    //redirect to the timer page
    window.location = "../timer.html";
})
    //console.log(result);
    //console.log(result.user.displayName);
});

$('#login').on('click', function(){
  login();
});

$('#logout').on('click', function(){
  logout();
  var url = "../index.html";
  window.location = url;
});
