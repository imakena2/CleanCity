const displayPickupErrors = require('./displayPickupErrors');

describe('displayPickupErrors', () => {
    test('should clear previous error messages', () => {
        document.body.innerHTML = `
            <div class="error-message" id="name-error">Previous Name Error</div>
            <div class="error-message" id="location-error">Previous Location Error</div>
            <div class="error-message" id="waste-error">Previous Waste Type Error</div>
        `;
        
        displayPickupErrors({});
        
        expect(document.getElementById('name-error').textContent).toBe('');
        expect(document.getElementById('location-error').textContent).toBe('');
        expect(document.getElementById('waste-error').textContent).toBe('');

    });
    
    test('should display location error', () => {
        document.body.innerHTML = `
            <div class="error-message" id="location-error"></div>
        `;
        
        const errors = { location: 'Location is required' };
        displayPickupErrors(errors);
        
        expect(document.getElementById('location-error').textContent).toBe('Location is required');
    });

    test('should display fullName error', () => {
        document.body.innerHTML = `
            <div class="error-message" id="name-error"></div>
        `;
        
        const errors = { fullName: 'Name is required' };
        displayPickupErrors(errors);
        
        expect(document.getElementById('name-error').textContent).toBe('Name is required');
    });
});