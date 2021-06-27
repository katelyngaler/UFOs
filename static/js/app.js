// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // First, clear out any existing data
    tbody.html("");

    //Next, loop through each object in the data and 
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // loop thru each field in dataRow and add vae as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );

    });

};

function handlClick(){
    // grab dattime from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // check if date was enter and filter using date
    if (data) {
        //apply filter to table only keep exact matches
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table, if no date entered, just original
    buildTable(filteredData);
};

// Attach an event to list for form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);