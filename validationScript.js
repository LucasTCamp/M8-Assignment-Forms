    // JavaScript code for form validation

document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent form from submitting
    event.preventDefault();
  // Retrieve the input field value
    const inputField = document.getElementById("inputField");
 // Regular expression pattern for alphanumeric input
    const regex = /^[a-zA-Z0-9]+$/;
 // Check if the input value matches the pattern
 // Valid input: display confirmation and submit the form
    if (regex.test(inputField.value)) {
        inputField.setCustomValidity("THIS IS VALID, SUBMITTED");
 // Invalid input: display error message
    } else {
      inputField.setCustomValidity("THIS IS NOT VALID, ENTER IN AN ALPHANUMERIC INPUT");
    }
});
