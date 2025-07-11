const {dataService, STORAGE_KEYS} = require('./addPickupRequest');

describe('addPickupRequest', () => {
 beforeEach(() => {
    localStorage.clear();
    
dataService.getAllPickupRequests = () => {
        const data = localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS);
        return data ? JSON.parse(data) : [];
      };
 });

 test('should add a new pickup request with all fields', () => {
    const requestData = {
        fullName: 'John Doe',
        location: 'Nairobi',
        wasteType: 'Plastic',
        preferredDate: '2025-10-01'
    };
    const newRequest = dataService.addPickupRequest(requestData);
    
    expect(newRequest).toEqual({
        id: 'REQ001',
        name: 'John Doe',
        location: 'Nairobi',
        wasteType: 'Plastic',
        preferredDate: '2025-10-01',
        status: 'Pending'
    });
    
    const storedRequests = JSON.parse(localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS));
    expect(storedRequests).toEqual([newRequest]);
 });

 test('should store the request in localStorage', () => {
    const requestData = {
        fullName: 'Jane Smith',
        location: 'Kisumu',
        wasteType: 'Organic',
        preferredDate: '2025-10-02'
    };
    dataService.addPickupRequest(requestData);
    
    const storedRequests = JSON.parse(localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS));
    expect(storedRequests.length).toBe(1);
    expect(storedRequests[0].name).toBe('Jane Smith');
 })

});