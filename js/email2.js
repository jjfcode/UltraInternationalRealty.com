function check() {
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var letusknow = document.getElementById('floatingTextarea2').value;

    if(firstname==false) {
        alert('Your First Name is Required');
        return false;
    } else if(lastname==false) {
        alert('Your Last Name is Required');
        return false;
    } else if(phone==false) {
        alert('Your Phone is Required');
        return false;
    } else if(email==false) {
        alert('Your Email is Required');
        return false;
    } else if(letusknow==false) {
        alert('Explain is Required');
        return false;
    } else {
        send(event);
    }
}

function send(event) {
    event.preventDefault();
    Email.send({
        name:document.getElementById('firstName').value,
        // SecureToken : "14b14874-42eb-4126-9715-253ac1a1daf0",
        SecureToken : "14b14874-42eb-4126-9715-253ac1a1daf0",
        To : 'msferlito@gmail.com',
        From : document.getElementById('email').value,
        Subject : 'Contact Request',
        Body : "<h3 style='display:inline;'>First Name: </h3>" + document.getElementById('firstName').value +
        "<br><h3 style='display:inline;'>Last Name: </h3>" + document.getElementById('lastName').value +
        "<br><h3 style='display:inline;'>Phone: </h3>" + document.getElementById('phone').value +
        "<br><h3 style='display:inline;'>Email: </h3>" + document.getElementById('email').value + 
        "<br><h3 style='display:inline;'>Let Us Know Type Of Business: </h3>" + document.getElementById('floatingTextarea2').value,
        }).then(function(response){
            if (response == 'OK') {
                alert("Mail sent succesfully");
                window.location.href="index.html";
            } else {
                throw new Error("Error: " + response.statusText);
            }
        });
}
