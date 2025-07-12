function validateFeedbackForm(data) {
    const errors = {};
    
    // Basic validation for Request ID
    if (!data.requestId.trim()) {
      errors.requestId = 'Request ID is required';
    }
    
    // Validate reason
    if (!data.reason) {
      errors.reason = 'Please select a reason';
    }
    
    // Subtle flaw: No validation for comments
    // Should require comments for proper feedback tracking
    
    return errors;
  }

  module.exports = validateFeedbackForm;