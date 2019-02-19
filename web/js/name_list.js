//console.log("Hi, this is a test.");

// Main Javascript File



// Called when "Add Item" button is clicked
function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");

    // Show the hidden dialog
    $('#myModal').modal('show');
}

function updateTable() {


// Define a URL
    var url = "api/name_list_get";

    $.getJSON(url, null, function (json_result) {
        // json_result is an object. You can set a breakpoint, or print
        // it to see the fields. Specifically, it is an array of objects.
        // Here we loop the array and print the first name.
        for (var i = 0; i < json_result.length; i++) {
            // console.log(json_result[i].first);
            // console.log(json_result[i].last);
            // console.log(json_result[i].phone);
            // console.log(json_result[i].email);
            // console.log(json_result[i].birthday);
            // console.log(json_result[i].id);

            $('#datatable tr:first').after('<tr>' +
                '<td>' + json_result[i].id + '</td>' +
                '<td>' + json_result[i].first + '</td>' +
                '<td>' + json_result[i].last + '</td>' +
                '<td>' + json_result[i].email + '</td>' +
                '<td>' + json_result[i].phone + '</td>' +
                '<td>' + json_result[i].birthday + '</td>'
                + '</tr>');
        }
    })
}

// There's a button in the form with the ID "addItem"
// Associate the function showDialogAdd with it.
var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

// Call your code.
updateTable();

// Define a function that will automatically be called when
// our request is done.
// function my_callback(json_result) {
//     console.log("Done");
// }
//
//
// // Start a web call. Specify:
// // URL
// // Data to pass (nothing in this case)
// // Function to call when we are done
// $.getJSON(url, null, my_callback);
//
// var formButton1 = $('#button1');
// formButton1.on("click", updateTable);
//
//
//
//     }
//
//
// );