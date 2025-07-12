const showMessage = require('./showMessage');

describe('showMessage', () => {

    let messageElement;
    
    beforeEach(() => {
        // Create a mock element to simulate the DOM
        messageElement = document.createElement('div');
        messageElement.id = 'testMessage';
        document.body.appendChild(messageElement);
    });
    
    afterEach(() => {
        // Clean up the mock element after each test
        document.body.removeChild(messageElement);
    });

    test('should display a message in the specified element', () => {
        showMessage('testMessage', 'pickup the waste on time,please');
        expect(messageElement.textContent).toBe('pickup the waste on time,please');
        expect(messageElement.style.display).toBe('block');
    });

    test('should not throw an error if the element does not exist', () => {
        expect(() => showMessage('nonExistent', 'This should not throw')).not.toThrow();
    });
});