const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const rememberMe = document.getElementById("remember-me").checked;
  const terms = document.getElementById("terms").checked;

  // Validation flags
  let isValid = true;
  let message = "";

  // First name validation
  if (firstName === "") {
    isValid = false;
    message += "First name is required.\n";
  }

  // Last name validation
  if (lastName === "") {
    isValid = false;
    message += "Last name is required.\n";
  }

  // Email or phone number validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^[0-9]{10}$/;
  if (!emailPattern.test(email) && !phonePattern.test(email)) {
    isValid = false;
    message += "Enter a valid email address or phone number.\n";
  }

  // Date of birth validation
  if (dob === "") {
    isValid = false;
    message += "Date of birth is required.\n";
  }

  // Password validation
  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordPattern.test(password)) {
    isValid = false;
    message +=
      "Password must be at least 8 characters long, include at least one capital letter, and one special character.\n";
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    isValid = false;
    message += "Passwords do not match.\n";
  }

  // Terms and conditions validation
  if (!terms) {
    isValid = false;
    message += "You must agree to the terms and privacy policy.\n";
  }

  // If validation fails
  if (!isValid) {
    alert(message);
    return;
  }

  // If validation passes
  alert("Form submitted successfully!");
  form.submit();
});
