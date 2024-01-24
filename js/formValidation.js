(function() {
  var btn = document.querySelector('.form-btn');
  var inputsList = document.querySelectorAll('.js-input');
  var form = document.querySelector('.contact-form');
  
  function checkFormValidation() {    
    inputsList.forEach(function(input) {
      if (!input.checkValidity()) {
        input.classList.add("invalid");
        form.reportValidity()
      }
    });
  }

  function checkRecaptchaValidation(event) {
    var response = grecaptcha.getResponse();
    var error = document.querySelector('.form-captcha-error');
    
    if(response.length == 0) {      
      event.preventDefault();
      error.textContent = 'Please verify that you are not a robot.';
    } else {
      error.textContent = ''; 
    }
  }
  
  btn.addEventListener('click', function(e) {
    checkFormValidation();
    checkRecaptchaValidation(e);
  });
})();
