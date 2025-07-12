const validateFeedbackForm = require('./validateFeedbackForm');

describe('validateFeedbackForm', () => {
    test('should return an error if requestId is empty', () => {
        const data = { requestId: '', reason: 'frequent lateness', comments: 'late pickup' };
        const errors = validateFeedbackForm(data);
        expect(errors.requestId).toBe('Request ID is required');
    });
    
    test('should return an error if reason is not selected', () => {
        const data = { requestId: 'REQ001', reason: '', comments: 'frequent delays' };
        const errors = validateFeedbackForm(data);
        expect(errors.reason).toBe('Please select a reason');
    });
    
    test('should not return any errors for valid input', () => {
        const data = { requestId: 'REQ001', reason: 'missed pickup request', comments: 'rude employees & late pickup' };
        const errors = validateFeedbackForm(data);
        expect(errors).toEqual({});
    });
    
    test('should not validate comments, but should be present for proper feedback tracking', () => {
        const data = { requestId: 'REQ001', reason: 'Other', comments: '' };
        const errors = validateFeedbackForm(data);
        expect(errors.comments).toBeUndefined();
    });
});