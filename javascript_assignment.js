function myUpdateFunction(event) {
    var fieldValue = $('#myTextField').val();
    $("#tableName tbody").append("<tr><td>"+fieldValue+"</td></tr>");
    console.log(fieldValue);
}

// Attach an the function to a button click
var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);
