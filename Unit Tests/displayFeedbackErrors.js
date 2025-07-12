function displayFeedbackErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Display new errors
    if (errors.requestId) {
      document.getElementById('requestId-error').textContent = errors.requestId;
    }
    if (errors.reason) {
      document.getElementById('reason-error').textContent = errors.reason;
    }
  }

  module.exports = displayFeedbackErrors;
  