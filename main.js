function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    if(name == null || name == ""){
        alert("Please Your Name Is Required");
        return false;
    }

    if(name.length <4){
        text = "Valid should be more than 3 characters";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf ("@") == -1 || email.length < 6){
        text = "Please Enter Vaild Email Address";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <20){
        alert("Please Enter More Than 20 Charaters");
        return false;
    }

    alert("Form Submitted Successfully")
    return true;

    

}