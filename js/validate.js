const input = document.querySelector('#email-input');

function checkForm(form)
  {
    // validation fails if the input is blank
    if(input.value == "") {
      alert("Error: Input is empty!");
      form.inputfield.focus();
      return false;
    }

    // regular expression to match only email addresses.
    var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(input.value)) {
      alert("Error: Input contains invalid characters!");
      input.focus();
      return false;
    }

    // validation was successful
    return true;
  }

  document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault();

    checkForm();
  });