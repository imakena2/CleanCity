function handleFeedbackSubmit(e, validateFeedbackForm, dataService, showMessage, displayFeedbackErrors) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      requestId: formData.get('requestId'),
      reason: formData.get('reason'),
      comments: formData.get('comments')
    };
    
    const errors = validateFeedbackForm(data);
    
    if (Object.keys(errors).length === 0) {
      const newFeedback = dataService.addFeedback(data);
      if (newFeedback) {
        showMessage('feedback-success', 'Feedback submitted successfully!');
        e.target.reset();
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    } else {
      displayFeedbackErrors(errors);
    }
  }

  module.exports = handleFeedbackSubmit;
