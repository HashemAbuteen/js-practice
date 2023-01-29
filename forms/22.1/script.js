document.getElementById("myForm").onsubmit = function() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var message = "Name: " + name + "\nAge: " + age + "\nEmail: " + email;
    var confirmed = confirm(message + "\n\nConfirm information?");
    if (confirmed) {
      alert("Congratulations, you have successfully sent this form.");
    } else {
      document.getElementById("name").readOnly = false;
      document.getElementById("age").readOnly = false;
      document.getElementById("email").readOnly = false;
    }
    return false;
  };
  