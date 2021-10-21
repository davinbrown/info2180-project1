/* Add your JavaScript to this file */

window.onload = function() {
    document.querySelector("button").addEventListener("click", function(event){
        event.preventDefault()
        subscribe();
    });
};

function subscribe() {
    // get the value from email input and remove remove whitespace from both sides
    var email = document.getElementById("email").value.trim();
    if (email == "") {
        document.querySelector(".message").innerHTML = "Please enter a valid email address";            
    }else{
        document.querySelector(".message").innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!";            
    }
}