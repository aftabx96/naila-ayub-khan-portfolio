
  jQuery.validator.addMethod("customAlphabetic", function(value, element) {
    // Use a regular expression to check for non-alphabetic characters
    if (/[^A-Za-z\s]/.test(value)) {
      return false; // Display the alert if non-alphabetic characters are found
    }
    return true;
  }, "Name should be in alphabets only");

  jQuery.validator.addMethod("customEmail", function(value, element) {
    // Use a regular expression to check for the desired email format
    if (/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
      return true; // Email format is valid
    }
    return false; // Display the alert if the email format is invalid
  }, "Please enter a valid email");

  jQuery('#frm').validate({
    rules: {
      name: {
        required: true,
        customAlphabetic: true
      },
      email: {
        required: true,
        customEmail: true // Use the custom email validation rule
      },
      subject: "required",
      message: "required"
    },
    messages: {
      name: {
        required: "<span>*</span>Please enter your Name",
        customAlphabetic: "<span>*</span>Name should contain alphabetic characters only"
      },
      email: {
        required: "<span>*</span>Please enter your Email",
        customEmail: "Please enter a valid email address."
      },
      subject: "<span>*</span>Please enter the Subject",
      message: "<span>*</span>Please write your Message"
    },
    submitHandler: function(form) {
      // Check if the form is valid before submitting
      if ($(form).valid()) {
        // You can add your custom submission logic here
        // For example, display a success message
        $(".loading").hide();
        $(".sent-message").show();
      }
    }
  });