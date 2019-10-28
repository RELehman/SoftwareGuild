function submitForm(){
    var contactName = document.forms["contactUs"]["name"].value;
    var emailAddress = document.forms["contactUs"]["email"].value;
    
    if(contactName == "" || emailAddress == ""){
        alert("Your name and email address are required in order to submit this form. Please fill out the required fields and then click submit.");
        return false;
    }else{
    alert("Your request has been submitted. Thank you for contacting us.");
    return false;
    }
}