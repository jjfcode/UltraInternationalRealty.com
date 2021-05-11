function check() {
    var name = document.getElementById('fullName').value;
    var email = document.getElementById('inputEmail4').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('inputAddress').value;
    var city = document.getElementById('inputCity').value;
    var choose = document.getElementById('inputState').value;
    var zip = document.getElementById('inputZip').value;
    var problem = document.getElementById('inputTop').value;
    var date = document.getElementById('inputDate').value;
    var explain = document.getElementById('exampleFormControlTextarea1').value;

    if(name==false) {
        alert('Your Full Name is Required');
        return false;
    } else if(email==false) {
        alert('Your Email is Required');
        return false;
    } else if(phone==false) {
        alert('Your Phone is Required');
        return false;
    } else if(address==false) {
        alert('Your Address is Required');
        return false;
    } else if(city==false) {
        alert('Your City is Required');
        return false;
    } else if(choose==false) {
        alert('Please Choose Your State');
        return false;
    } else if(zip==false) {
        alert('Zip code is Required');
        return false;
    } else if(problem==false) {
        alert('Please Select Type of Problem');
        return false;
    } else if(date==false) {
        alert('Date is Required');
        return false;
    } else if(explain==false) {
        alert('Explain is Required');
        return false;
    } else {
        send(event);
    }
}

function send(event) {
    event.preventDefault();
    Email.send({
        name:document.getElementById('fullName').value,
        // SecureToken : "14b14874-42eb-4126-9715-253ac1a1daf0",
        SecureToken : "14b14874-42eb-4126-9715-253ac1a1daf0",
        To : 'jjfcode@gmail.com',
        From : document.getElementById('inputEmail4').value,
        Subject : 'Request a Quote',
        Body : "<h3 style='display:inline;'>Name: </h3>" + document.getElementById('fullName').value +
        "<br><h3 style='display:inline;'>Email: </h3>" + document.getElementById('inputEmail4').value + 
        "<br><h3 style='display:inline;'>Phone: </h3>" + document.getElementById('phone').value +
        "<br> <h3 style='display:inline;'>Address: </h3>" + document.getElementById('inputAddress').value + 
        "<br> <h3 style='display:inline;'>City: </h3>" + document.getElementById('inputCity').value + 
        "<br> <h3 style='display:inline;'>State: </h3>" + document.getElementById('inputState').value + 
        "<br> <h3 style='display:inline;'>Zip Code: </h3>" + document.getElementById('inputZip').value + 
        "<br> <h3 style='display:inline;'>Type Of Problem: </h3>" + document.getElementById('inputTop').value +
        "<br> <h3 style='display:inline;'>Date Problem Start: </h3>" + document.getElementById('inputDate').value +
        "<br><h3 style='display:inline;'>Explain: </h3>" + document.getElementById('exampleFormControlTextarea1').value,
        }).then(function(response){
            if (response == 'OK') {
                alert("Mail sent succesfully");
                window.location.href="index.html";
            } else {
                throw new Error("Error: " + response.statusText);
            }
        });
}
