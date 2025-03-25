    // JavaScript code for form validation
	// Prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Retrieve the input field value
  const inputField = document.getElementById("inputField");
 // Regular expression pattern for alphanumeric input
  const regex = /^[a-zA-Z0-9_]*$,/;
 // Check if the input value matches the pattern
 // Valid input: display confirmation and submit the form
  if (regex.test(inputField)) {
      const valid = document.createElement("p");
      valid.textContent = "VALID";
      document.getElementById("myForm").appendChild(valid);
// Invalid input: display error message
  } else {
    event.preventDefault();
    const invalid = document.createElement("p");
    invalid.textContent = "INVALID";
    document.getElementById("myForm").appendChild(invalid);
  }
   

});
