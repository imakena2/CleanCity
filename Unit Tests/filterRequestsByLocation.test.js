const dataService = require('./filterRequestsByLocation');

describe('filterRequestsByLocation', () => {
    const mockRequests = [
        { id: 'REQ001', location: 'Nairobi' },
        { id: 'REQ002', location: 'Kisumu' },
        { id: 'REQ003', location: 'Mombasa' },
        { id: 'REQ004', location: 'Eldoret' },
    ];
    beforeEach(() => {
        dataService.getAllPickupRequests = jest.fn(() => mockRequests);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return all requests when no location is specified', () => {
        const result = dataService.filterRequestsByLocation();
        expect(result).toEqual(mockRequests);
    });

    test('should return requests for the specified location', () => {
        const result = dataService.filterRequestsByLocation('Nairobi');
        expect(result).toEqual([{ id: 'REQ001', location: 'Nairobi' }]);
    });

    test('should show the bug where Eldoret requests are incorrectly returned as Nairobi', () => {
        const result = dataService.filterRequestsByLocation('Eldoret');
        expect(result).toEqual([{ id: 'REQ001', location: 'Nairobi' }]);
    });
});

    