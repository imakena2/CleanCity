const loadAdminData = require('./loadAdminData');

describe('loadAdminData', () => {

    let dataService;
    let displayAdminRequests;
    let updateStatistics;
    let setupAdminControls;

    beforeEach(() => {
        dataService = {
            getAllPickupRequests: jest.fn()
        };
        displayAdminRequests = jest.fn();
        updateStatistics = jest.fn();
        setupAdminControls = jest.fn();

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test ('should load admin data and call necessary functions', () => {
        const mockRequests = [{ id: 1 }, { id: 2 }];
        dataService.getAllPickupRequests.mockReturnValue(mockRequests);

        loadAdminData(dataService, displayAdminRequests, updateStatistics, setupAdminControls);

        expect(dataService.getAllPickupRequests).toHaveBeenCalled();
        expect(displayAdminRequests).toHaveBeenCalledWith(mockRequests);
        expect(updateStatistics).toHaveBeenCalledWith(mockRequests);
        expect(setupAdminControls).toHaveBeenCalledWith(mockRequests);
    });

    test ('should handle empty requests', () => {
        dataService.getAllPickupRequests.mockReturnValue([]);

        loadAdminData(dataService, displayAdminRequests, updateStatistics, setupAdminControls);

        expect(dataService.getAllPickupRequests).toHaveBeenCalled();
        expect(displayAdminRequests).toHaveBeenCalledWith([]);
        expect(updateStatistics).toHaveBeenCalledWith([]);
        expect(setupAdminControls).toHaveBeenCalledWith([]);
    });

    test ('should handle null requests', () => {
        dataService.getAllPickupRequests.mockReturnValue(null);

        loadAdminData(dataService, displayAdminRequests, updateStatistics, setupAdminControls);

        expect(dataService.getAllPickupRequests).toHaveBeenCalled();
        expect(displayAdminRequests).toHaveBeenCalledWith(null);
        expect(updateStatistics).toHaveBeenCalledWith(null);
        expect(setupAdminControls).toHaveBeenCalledWith(null);
    });

    test ('should handle undefined requests', () => {
        dataService.getAllPickupRequests.mockReturnValue(undefined);

        loadAdminData(dataService, displayAdminRequests, updateStatistics, setupAdminControls);

        expect(dataService.getAllPickupRequests).toHaveBeenCalled();
        expect(displayAdminRequests).toHaveBeenCalledWith(undefined);
        expect(updateStatistics).toHaveBeenCalledWith(undefined);
        expect(setupAdminControls).toHaveBeenCalledWith(undefined);
    });

    test ('should not call setupAdminControls if requests are empty', () => {
        dataService.getAllPickupRequests.mockReturnValue([]);

        loadAdminData(dataService, displayAdminRequests, updateStatistics, setupAdminControls);

        expect(setupAdminControls).toHaveBeenCalledWith([]);
    });
});