function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var age = document.forms["myForm"]["age"].value;
  if (fname == "") {
    alert("First Name must be filled out");
    return false;
  }
else if (lname == "") {
    alert("Last Name must be filled out");
    return false;
  }
else if (age == "") {
    alert("Age must not be empty");
    return false;s
  }
    else{
        window.location.href="registrationsuccess.html";
    }
}

function go(){
    window.location.href="loginform.html"
}


function validateForm2() {
    var fname = document.forms["myForm2"]["fname"].value;
    var lname = document.forms["myForm2"]["lname"].value;
    //var age = document.forms["myForm"]["age"].value;
  if (fname == "") {
    alert("First Name must be filled out");
    return false;
  }
else if (lname == "") {
    alert("Last Name must be filled out");
    return false;
  }

    else{
        window.location.href="homepage.html";
    }
}

function go(){
    window.location.href="loginform.html"
}
