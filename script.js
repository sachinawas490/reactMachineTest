function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.getElementById("password").value;


  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }


  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phoneNumber)) {
    alert("Please enter a valid phone number (10 digits).");
    return false;
  }

  
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

 
  return true;
}
