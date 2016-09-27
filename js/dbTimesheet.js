
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

// Timesheet Object
var timesheet = {
  	userID: "",
  	propertyID: "",
  	clockIn: firebase.database.ServerValue.TIMESTAMP,
  	clockOut: "",
	timeWorked: ""
}


// METHODS
// ========================================================== 

database.ref().on("child_added", function(childSnapshot) {
  	var timesheet = childSnapshot.val();
  	var clockedIn = timesheet.clockIn;
	var clockedOut = timesheet.clockOut;
	var timeWorked = calcTimeWorked(clockedIn, clockedOut);
	console.log("Clocked In at: " + clockedIn);
	console.log("Clocked Out at: " + clockedOut);
	console.log("Hours worked: " + timeWorked);
	console.log("timesheet object: " + JSON.stringify(timesheet));
});

// FUNCTIONS
// ==========================================================

//Store the time the user clocked In
function clockIn(userId, propertyId, timeIn) {
 	// Current Time
  	var currentTime = moment();
  	console.log("Current Time: " + moment(currentTime).format("hh:mm"));
  	console.log("Time In: " + timeIn);

	timesheet.userID = userId;
	timesheet.propertyID = propertyId;
	timesheet.timeIn = parseInt(timeIn);
	database.ref().push(timesheet);

	return 
}

//Store the time the user clocked Out
function clockOut(userId, propertyId, timeOut) {
 	// Current Time
  	var currentTime = moment();
  	console.log("Current Time: " + moment(currentTime).format("hh:mm"));
  	console.log("Time Out: " + timeOut);

	timesheet.userID = userId;
	timesheet.propertyID = propertyId;
	timesheet.timeOut = parseInt(timeOut);
	database.ref().push(timesheet);	
	
	return 

//Calculate the difference between the times
function calcTimeWorked(timeIn, timeOut) {
	//var diffTime = moment().diff(moment(timeIn), "minutes");
  	
	var diffTime = moment.utc(moment(timeOut,"DD/MM/YYYY HH:mm:ss").diff(moment(timeIn,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
  	console.log("Diff in Minutes: " + diffTime);	

	return diffTime
}

function hoursDiff(d1, d2) {
  	var date1 = new moment(d1);
    var date2 = new moment(d2);
    var hours = date2.diff(date1, "hours");


    console.log ("date1:" + moment(date1).format("MM/DD/YYYY"));
    console.log ("date2:" + moment(date2).format("MM/DD/YYYY"));
    console.log ("diff:" + hours);

   	return hours
}

