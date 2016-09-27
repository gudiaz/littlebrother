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

//Authenticate with Firebase using the Facebook provider object.
function login(){
  //To sign in by redirecting to the sign-in page, call signInWithRedirect:
  firebase.auth().signInWithRedirect(provider);
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
})
    //console.log(result);
    //console.log(result.user.displayName);
});

$('#login').on('click', function(){
  login();
  var url = "../timer.html";
  window.location = url;
});

$('#logout').on('click', function(){
  logout();
  var url = "../index.html";
  window.location = url;
});
