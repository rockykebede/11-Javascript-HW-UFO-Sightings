// referencing data.js
var ufoData = data;

// get table references to the tbody element 
var tbody = d3.select("tbody");

// use function renderTable to insert data in tr element
function renderTable(data) {
  
  tbody.html("");

  // Looping through each object in the data.js using 'for each'
  // to create a new row and cells for each value in tr element 

  data.forEach((dataRow) => {
    // Append a row to the tbody
    var row = tbody.append("tr");

    // Looping through each field in the dataRow to create a new cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleSearchClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filterdata 
  var date = d3.select("#datetime").property("value");
  let filteredData = ufoData;

  // Use filteredData to an array of all dates matching the filter using the date searched
  
  if (date) {
    
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  renderTable(filteredData);
}

// Add an event to listener to the handleSearchClick
d3.selectAll("#filter-btn").on("click", handleSearchClick);

// Build the table when the page loads
renderTable(ufoData);
