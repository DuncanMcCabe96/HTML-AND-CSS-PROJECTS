//RECIPE POP UP MODAL SECTION

//Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//defined all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//get the span element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//When the user clicks the button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";

         // Set a timeout to close the modal after 10 seconds
         setTimeout(function() {
            if (modal.style.display === "block") {
                modal.style.display = "none";
            }
         }, 5000); // 5 seconds    
    }
}

//when the user clicks on<span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//email validation

document.getElementById("contactForm").addEventListener("submit", function (event) {
    //overrides the default browser refresh when the submit button is pressed
    event.preventDefault();

    //variables to validate that each variable is filled out
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    //email pattern checks for all the symbols that would be needed
    //for an email address such as the @ and . and the text that would
    //come before, betwee, and after.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //use this variable to display message if fields are filled out or thank you message
    const valMsg = document.getElementById('validateMsg');

    if (!firstName || !lastName || !phone || !message) {
        //checks if field have been filled out
        valMsg.innerHTML = '<p style="color:red;">Please fill out all empty fields</p>';
    } else if (!emailPattern.test(email)) {
        //checks if email is valid
        valMsg.innerHTML = '<p style="color:red;">Please enter a valid email address</p>';
    } else {
        //if all fields are filled out and email is valid, display thank you message
        valMsg.innerHTML = '<p style="color:red;">Thank you for submitting!</p>';
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subsribe: document.getElementById("subscription").checked
    };

    //Displays what the user wrote in the console
    console.log(JSON.stringify(formData));
}
);