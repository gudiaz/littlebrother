
console.log("loaded main.js");
var apiKey = "";
var array =[];

// These variables will hold the results we get from the user's inputs via HTML
var queryTerm   = "";
var numResults  = 0;
var startYear   = 0;
var endYear   = 0;

// Based on the queryTerm we will create a queryURL 
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Array to hold the various article info
var counter = 0;

// METHODS
// ==========================================================
  
  // On Click button associated with the Search Button
  $('#runSearch').on('click', function(){

    // Initially sets the counter to 0
    counter = 0;

    // Empties the region associated with the articles
    $("#rowSection").empty();

    // Search Term
    var searchTerm = $('#searchTerm').val().trim();
    queryURL = queryURLBase + searchTerm;

    // Num Results
    numResults = $("#numRecordsSelect").val();

    // Start Year
    startYear = $('#startYear').val().trim();

    // End Year
    endYear = $('#endYear').val().trim();

    // If the user provides a startYear -- the startYear will be included in the queryURL
    if (parseInt(startYear)) {
      queryURL = queryURL + "&begin_date=" + startYear + "0101";
    }

    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (parseInt(endYear)) {
      queryURL = queryURL + "&end_date=" + endYear + "0101";
    }

    // Then we will pass the final queryURL and the number of results to include to the runQuery function
    runQuery(numResults, queryURL);

    // This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
    return false;
  }); 

// This button clears the top articles section
$('#clearAll').on('click', function(){
  counter = 0;
  $("#wellSection").empty();
})


// FUNCTIONS
// ==========================================================

// This runQuery function expects two parameters (the number of articles to show and the final URL to download data from)
function runQuery(numArticles, queryURL){
    var queryURL = "";

    queryURL = "http://url.json?&api-key=" + apiKey +  "q=" + searchTerm;

 
    $.ajax({ url: queryURL, method: 'GET'})
      .done(function(response) {
      var results = response.response;
      console.log('response: ', results)

      for (i = 0; i < results.docs.length; i++) {
        array.push({
          'attribute': results.docs[i].field-from-object,
          'attribute2': results.docs[i].field2-from-object
        });
      }
    });
  return array;
}

// This button clears the rows
$('#clearAll').on('click', function(){
  counter = 0;
  $("#rowSection").empty();
})
