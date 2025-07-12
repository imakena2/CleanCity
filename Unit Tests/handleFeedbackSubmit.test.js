const handleFeedbackSubmit = require('./handleFeedbackSubmit');

describe('handleFeedbackSubmit', () => {
  let mockValidateFeedbackForm;
  let mockDataService;
  let mockShowMessage;
  let mockDisplayFeedbackErrors;
  let form;

  beforeEach(() => {
    // Set up mock form in the DOM
    document.body.innerHTML = `
      <form id="feedback-form">
        <input name="requestId" value="REQ001" />
        <input name="reason" value="Late pickup" />
        <textarea name="comments">The pickup was delayed by three days</textarea>
      </form>
    `;

    form = document.getElementById('feedback-form');

    mockValidateFeedbackForm = jest.fn();
    mockDataService = {
      addFeedback: jest.fn()
    };
    mockShowMessage = jest.fn();
    mockDisplayFeedbackErrors = jest.fn();
  });

  test('should submit feedback successfully if no validation errors', () => {
    mockValidateFeedbackForm.mockReturnValue({}); 
    mockDataService.addFeedback.mockReturnValue(true);

    const event = {
      preventDefault: jest.fn(),
      target: form
    };

    handleFeedbackSubmit(event, mockValidateFeedbackForm, mockDataService, mockShowMessage, mockDisplayFeedbackErrors);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockValidateFeedbackForm).toHaveBeenCalledWith({
      requestId: 'REQ001',
      reason: 'Late pickup',
      comments: 'The pickup was delayed by three days'
    });
    expect(mockDataService.addFeedback).toHaveBeenCalled();
    expect(mockShowMessage).toHaveBeenCalledWith('feedback-success', expect.stringContaining('submitted successfully'));
  });

  test('should display errors if validation fails', () => {
    const errors = { comments: 'Comments are required' };
    mockValidateFeedbackForm.mockReturnValue(errors);

    const event = {
      preventDefault: jest.fn(),
      target: form
    };

    handleFeedbackSubmit(event, mockValidateFeedbackForm, mockDataService, mockShowMessage, mockDisplayFeedbackErrors);

    expect(mockDisplayFeedbackErrors).toHaveBeenCalledWith(errors);
    expect(mockDataService.addFeedback).not.toHaveBeenCalled();
    expect(mockShowMessage).not.toHaveBeenCalled();
  });
});
