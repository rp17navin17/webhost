function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return false;
  }

  if (!terms) {
    alert("You must accept the terms and conditions.");
    return false;
  }

  // You can add more validation logic if needed
  alert("Form submitted successfully!");
  return true;
}
