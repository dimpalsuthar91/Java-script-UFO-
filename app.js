// from data.js
var tableData = data;

// YOUR CODE HERE!
//tbody element 
var $tBody = document.querySelector("tbody");
//data input
var $input = document.querySelector("#datetime");
//state input
var $inputState = document.querySelector("#state")
//search
var $searchB = document.querySelector("#search");

// event handle search
$searchB.addEventListener("click", handleSearchButtonClick);

// UFO filtered 
var UFO = dataSet;

// UFO to the tbody table function
function Table() {
  $tBody.innerHTML = "";
  console.log("render is happen")

  for (var i = 0; i < UFO.length; i++) {
    
    //object sight and fieldsData
    var sight = UFO[i];
    var fieldsData = Object.keys(sight);
    // create new row for tBody
    var $row = $tBody.insertRow(i);
    for (var j = 0; j < fieldsData.length; j++) {
      //  address objectcreating new cell
      var field = fieldsData[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sight[field];
    }
  }
}

function handleSearchButtonClick() {
  // format user search 
  var filterDate = $input.value.trim();
  var filterState = $inputState.value.trim().toLowerCase();

  if (filterDate.length != 0){
    UFO = data.filter(function(sight) {
      var sightingDate = sight.datetime;
       return sightingDate === filterDate;
         });
  }
  else {
    UFO = dataSet
  }
  if (filterState.length != 0){
    UFO = UFO.filter(function(sight) {
      var sightingState = sight.state;
       return sightingState === filterState;
         });
  }
  else {
    UFO = UFO
  }
  renderTable();
}

// Render the table 
renderTable();