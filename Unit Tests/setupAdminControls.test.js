const setupAdminControls = require('./setupAdminControls');

describe('setupAdminControls', () => {

    let requests, dataService, loadAdminData;
    
    beforeEach(() => {
        requests = [
        { id: 'REQ001', name: 'REQ001', location: 'Mombasa' },
        { id: 'REQ002', name: 'REQ002', location: 'Nairobi' }
        ];
        
        dataService = {
        updateRequestStatus: jest.fn().mockReturnValue(true)
        };
        
        loadAdminData = jest.fn();
        
        document.body.innerHTML = `
        <select id="requestSelect"></select>
        <select id="statusSelect">
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
        </select>
        <button id="updateStatusBtn">Update Status</button>
        `;
    });
    
    test('should populate request select with options', () => {
        setupAdminControls(requests, dataService, loadAdminData);
        const requestSelect = document.getElementById('requestSelect');
        
        expect(requestSelect.options.length).toBe(3); 
        expect(requestSelect.options[1].value).toBe('REQ001');
        expect(requestSelect.options[1].textContent).toBe('REQ001 - REQ001 (Mombasa)');
    });
    
    test('should enable update button when both selects have values', () => {
        setupAdminControls(requests, dataService, loadAdminData);
        const requestSelect = document.getElementById('requestSelect');
        const statusSelect = document.getElementById('statusSelect');
        const updateBtn = document.getElementById('updateStatusBtn');
    
        requestSelect.value = 'REQ001';
        statusSelect.value = 'approved';
        
        const event = new Event('change');
        requestSelect.dispatchEvent(event);
        statusSelect.dispatchEvent(event);
        
        expect(updateBtn.disabled).toBe(false);
    });
    
    test('should call dataService.updateRequestStatus on button click', () => {
        setupAdminControls(requests, dataService, loadAdminData);
        const requestSelect = document.getElementById('requestSelect');
        const statusSelect = document.getElementById('statusSelect');
        const updateBtn = document.getElementById('updateStatusBtn');
    
        requestSelect.value = 'REQ001';
        statusSelect.value = 'approved';
        
        updateBtn.click();
});

});