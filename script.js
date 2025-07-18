$(document).ready(function () {

  // Show/Hide password
  $('#togglePassword').change(function () {
    let passInput = $('#password');
    if ($(this).is(':checked')) {
      passInput.attr("type", "text");
    } else {
      passInput.attr("type", "password");
    }
  });

  $('#registrationForm').submit(function (e) {
    e.preventDefault();  // stop default refresh

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let phone = $("#phone").val().trim();
    let password = $("#password").val().trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    // Reset message
    $("#message").hide().removeClass("error success");

    if (name === "") {
      showMessage("Name cannot be empty!", "error");
      return;
    }

    if (!emailPattern.test(email)) {
      showMessage("Please enter a valid email (e.g. user@example.com)", "error");
      return;
    }

    if (!phonePattern.test(phone)) {
      showMessage("Phone number must be exactly 10 digits!", "error");
      return;
    }

    if (!passwordPattern.test(password)) {
      showMessage("Password must have 6+ chars, 1 uppercase, 1 lowercase, 1 number!", "error");
      return;
    }

    showMessage("✅ Form submitted successfully!", "success");
  });

  //function to display messages
  function showMessage(msg, type) {
    $("#message")
      .text(msg)
      .removeClass("error success")
      .addClass(type)
      .slideDown();
  }
});
