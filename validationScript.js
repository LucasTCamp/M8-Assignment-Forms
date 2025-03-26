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
        alert("VALID, Submitted");
 // Invalid input: display error message
    } else {
        alert("INVALID, Try again");
    }
});
