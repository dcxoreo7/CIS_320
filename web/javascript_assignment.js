function myUpdateFunction() {

    console.log('Hello');
}
function myAddFunction(){

    //document.getElementByID("field1").submit();
    console.log('Added Field One and Two');
    var sum = Number(document.getElementById("field1").value) +
        Number(document.getElementById("field2").value).valueOf();
    document.getElementById('field3').value = sum;
}

function hideTheText(){

    var x = document.getElementById("paragraphToHide");
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log('Paragraph revealed');

    } else {
        x.style.display = "none";
        console.log('Paragraph hidden');
    }

}

function verifyCell(){
    var v1 = document.getElementById('phoneField').value;

    var reg = /\b\d{3}[-]?\d{3}[-]?\d{4}\b/g;
    if (reg.test(v1)){
        console.log('Good');
    } else {
        console.log('Bad');
    }
}

function grabFields(){
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var eMail = document.getElementById("email").value;

    var myObject = {firstName: fName, lastName: lName, email: eMail};
    var gFieldsString = JSON.stringify(myObject);
    console.log(gFieldsString);
}

// Attach an the function to a button click
var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);

// Adding the function for part 2
var formButton2 = $('#button2');
formButton2.on("click", myAddFunction);

//Adding the function for part 3
var formButton3 = $('#button3');
formButton3.on("click", hideTheText);

//Adding the function for part 4
var formButton4 = $('#button4');
formButton4.on("click", verifyCell);

var formButton5 = $('#button5');
formButton5.on("click", grabFields);


