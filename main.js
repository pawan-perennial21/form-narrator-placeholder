document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('accessibleForm');
  const firstNameField = document.getElementById('firstName');
  const lastNameField = document.getElementById('lastName'); // Added last name field
  const emailField = document.getElementById('email');
  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError'); // Added last name error element
  const emailError = document.getElementById('emailError');

  // Function to validate first name field
  window.validateFieldFirstName = () => {
    const firstNameValue = firstNameField.value.trim();
    let isValid = true;

    if (!firstNameValue) {
      isValid = false;
      firstNameError.textContent = 'Please provide a value for first name.';
      firstNameField.setAttribute('aria-invalid', 'true');
    } else {
      firstNameError.textContent = '';
      firstNameField.setAttribute('aria-invalid', 'false');
    }

    firstNameError.setAttribute('aria-live', isValid ? 'off' : 'assertive');
    return isValid;
  };

  // Function to validate last name field
  window.validateFieldLastName = () => {
    const lastNameValue = lastNameField.value.trim();
    let isValid = true;

    if (!lastNameValue) {
      isValid = false;
      lastNameError.textContent = 'Please provide a value for last name.';
      lastNameField.setAttribute('aria-invalid', 'true');
    } else {
      lastNameError.textContent = '';
      lastNameField.setAttribute('aria-invalid', 'false');
    }

    lastNameError.setAttribute('aria-live', isValid ? 'off' : 'assertive');
    return isValid;
  };

  // Function to validate email field
  window.validateFieldEmail = () => {
    const emailValue = emailField.value.trim();
    let isValid = true;

    if (!emailValue) {
      isValid = false;
      emailError.textContent = 'Please provide a value for email.';
      emailField.setAttribute('aria-invalid', 'true');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      isValid = false;
      emailError.textContent = 'Invalid email format.';
      emailField.setAttribute('aria-invalid', 'true');
    } else {
      emailError.textContent = '';
      emailField.setAttribute('aria-invalid', 'false');
    }

    emailError.setAttribute('aria-live', isValid ? 'off' : 'assertive');
    return isValid;
  };

  // Function to handle validation on field interaction and input
  const handleFieldInteraction = (field, validateFunction, errorElement) => {
    // Validate on focus
    field.addEventListener('focus', () => {
      validateFunction();
      if (errorElement.textContent) {
        errorElement.setAttribute('aria-live', 'assertive');
      }
    });

    field.addEventListener('input', () => {
      validateFunction();
      if (errorElement.textContent) {
        errorElement.setAttribute('aria-live', 'assertive');
      }
    });
  };

  // Apply validation interaction for each field
  handleFieldInteraction(
    firstNameField,
    validateFieldFirstName,
    firstNameError
  );
  handleFieldInteraction(lastNameField, validateFieldLastName, lastNameError);
  handleFieldInteraction(emailField, validateFieldEmail, emailError);
});
