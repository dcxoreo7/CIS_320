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

function updateNlist(){
    console.log("changes saved");
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var eMail = document.getElementById("email").value;
    var birthday = document.getElementById("birthday").value;
    var phone = document.getElementById("phone").value;

    //var myObject = {firstName: fName, lastName: lName, email: eMail, birthday: birthday, phone: phone};
    //var gFieldsString = JSON.stringify(myObject);
    //console.log(gFieldsString);

    //var v1 = document.getElementById('phoneField').value;

    var regPhone = /\b\d{3}[-]?\d{3}[-]?\d{4}\b/g;
    var regBirth = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/i;
    var regName = /^[a-zA-Z]+(([',.-][a-z])?[a-zA-Z]*)*$/;
    var regEmail = /^\s+@\s+\.\s+$/i;

//     if (regPhone.test(phone) && regBirth.test(birthday) && regName.test(fName) && regName.test(lName) && regEmail.test(eMail)){
//         console.log(fName + " " + lName + " " + phone + " " + birthday);
//     } else {
//         console.log('One or more fields invalid');
//     }
// }

    if (regName.test(fName)){
        $('#firstName').removeClass("is-invalid");
        $('#firstName').addClass("is-valid");

    }
    else{
        $('#firstName').removeClass("is-valid");
        $('#firstName').addClass('is-invalid');
    }

    if (regName.test(lName)){
        $('#lastName').removeClass("is-invalid");
        $('#lastName').addClass("is-valid");
    }
    else {
        $('#lastName').removeClass("is-valid");
        $('#lastName').addClass('is-invalid');
    }

    if (regPhone.test(phone)){
        $('#phone').removeClass("is-invalid");
        $('#phone').addClass("is-valid");
    }
    else{
        $('#phone').removeClass("is-valid");
        $('#phone').addClass("is-invalid");
    }
    if (regBirth.test(birthday)){
        $('#birthday').removeClass("is-invalid");
        $('#birthday').addClass("is-valid");
    }
    else{
        $('#birthday').removeClass("is-invalid");
        $('#birthday').addClass("is-valid");
    }
    if (regEmail.test(eMail)){
        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
    }
    else{
        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
    }
}
// There's a button in the form with the ID "addItem"
// Associate the function showDialogAdd with it.

function closeClear(){
    $('#firstName').removeClass("is-valid");
    //$('#firstName').removeClass("is-invalid");
    $('#lastName').removeClass("is-valid");
    //$('#lastName').removeClass("is-invalid");
    $('#phone').removeClass("is-valid");
    //$('#phone').removeClass("is-invalid");
    $('#email').removeClass("is-valid");
    //$('#email').removeClass("is-invalid");
    $('#birthday').removeClass("is-valid");
    //$('#birthday').removeClass("is-invalid");
}

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", updateNlist);

var closeButton = $('#close');
closeButton.on("click",closeClear);

var closeBoxButton = $('#closeBox');
closeBoxButton.on("click",closeClear);


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