
// Initialize Firebase
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

// Initial value
var user = {
  userID: "",
  firstName: "",
  lastName: "",
  title: "",
  ssn: "",
  dob: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  startDate: "",
  hourlyWage: "",
  taxExempt: false,
  dateAdded: firebase.database.ServerValue.TIMESTAMP
}

var property = {
  propertyID: "",
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  contactName: "",
  contactPhone: "",
  managerID: "",
  dateAdded: firebase.database.ServerValue.TIMESTAMP
}

var timesheet = {
  empID: "",
  propertyID: "",
  clockinDate: firebase.database.ServerValue.TIMESTAMP,
  clockoutDate: ""
}


// METHODS
// ==========================================================
  
// Submit Button Click
$("#btnSubmit").on("click", function() {

  // Code in the logic for storing and retrieving the most recent user.
  user.userID = $("#user-id").val().trim();
  user.firstName = $("#first-name").val().trim();
  user.lastName = $("#last-name").val().trim();
  // user.title = $("#user-title").val().trim();
  // user.ssn = $("#user-ssn").val().trim();
  // user.dob = $("#user-dob").val().trim();
  // user.address = $("#user-address").val().trim();
  // user.city = $("#user-city").val().trim();
  // user.state = $("#user-state").val().trim();
  // user.zip = $("#user-zip").val().trim();
  // user.phone = $("#user-phone").val().trim();
  // user.startDate = $("#start-date").val().trim();
  user.hourlyWage = $("#hourly-wage").val().trim();
  //user.taxExempt = $("#tax-exempt").val();

  console.log("user: " + JSON.stringify(user));
  
    // Save new value to Firebase
  database.ref().push(user);

  // Don't refresh the page!
  return false;
});


database.ref().on("child_added", function(childSnapshot) {
  var user = childSnapshot.val();
  var row = $("<tr>");
  var colUserId = $("<td>").html(user.userID);
  var colFirstName = $("<td>").html(user.firstName);
  var colLastName = $("<td>").html(user.lastName);
  var colHourlyWage = $("<td>").html(user.hourlyWage);


  row.append(colUserId).append(colFirstName).append(colLastName).append(colHourlyWage);
  $("#userTable").append(row);
});

// FUNCTIONS
// ==========================================================

function monthDiff(d1, d2) {
  var date1 = new moment(d1);
    var date2 = new moment(d2);
    var months = date2.diff(date1, "months");


    console.log ("date1:" + moment(date1).format("MM/DD/YYYY"));
    console.log ("date2:" + moment(date2).format("MM/DD/YYYY"));
    console.log ("diff:" + months);
   return months;
}

