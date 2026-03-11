// Wait until the form is submitted 
document.getElementById("contact-form") .addEventListener("submit", function(event) {
    // Get the values from the email and confirm email fields
    const email = document.getElementById("email") .value;
    const confirmEmail = document.getElementById("confirmEmail") .value;

    // Check if they match
    if (email !== confirmEmail) {
        // Stop the form from submitting
        event.preventDefault();
        // Show an alert box
        alert("The email addresses do not match. Please re-enter.");
    }
});