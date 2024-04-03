document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('jobApplicationForm');
  const submitBtn = document.getElementById('submitBtn');

  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const resumeField = document.getElementById('resume');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const addressError = document.getElementById('addressError');
  const resumeError = document.getElementById('resumeError');

  form.addEventListener('input', function (event) {
    validateForm();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to a server for this example

    if (validateForm()) {
      // Form submission code goes here
      alert('Form submitted successfully!');
    }
  });

  function validateForm() {
    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    addressError.textContent = '';
    resumeError.textContent = '';

    // Name validation
    if (!nameField.validity.valid) {
      nameError.textContent = 'Name must only contain letters';
      isValid = false;
    }

    // Email validation
    if (!emailField.validity.valid) {
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone number validation
    if (!phoneField.validity.valid) {
      phoneError.textContent = 'Phone number must be in format XXX-XXXXXXX';
      isValid = false;
    }

    // Address validation
    if (!addressField.validity.valid) {
      addressError.textContent = 'Please enter a valid address';
      isValid = false;
    }

    // Resume validation
    if (!resumeField.validity.valid) {
      resumeError.textContent = 'Please upload a valid resume (PDF or DOCX)';
      isValid = false;
    } else if (resumeField.files[0].size > 5000000) {
      resumeError.textContent = 'Resume file size must be less than 5 MB';
      isValid = false;
    }

    // Enable/disable submit button
    submitBtn.disabled = !isValid;

    return isValid;
  }
});
