const displayFeedbackErrors = require('./displayFeedbackErrors');

describe('displayFeedbackErrors', () => {

    beforeEach(() => {
        // Clear previous error messages
        document.body.innerHTML = `
            <div id="requestId-error" class="error-message"></div>
            <div id="reason-error" class="error-message"></div>
        `;
    });

    test('should display requestId error message', () => {
        const errors = { requestId: 'Request ID is required' };
        displayFeedbackErrors(errors);
        expect(document.getElementById('requestId-error').textContent).toBe('Request ID is required');
    });

    test('should display reason error message', () => {
        const errors = { reason: 'Please select a reason' };
        displayFeedbackErrors(errors);
        expect(document.getElementById('reason-error').textContent).toBe('Please select a reason');
    });

    test('should not display any error messages if no errors are present', () => {
        const errors = {};
        displayFeedbackErrors(errors);
        expect(document.getElementById('requestId-error').textContent).toBe('');
        expect(document.getElementById('reason-error').textContent).toBe('');
    });
})