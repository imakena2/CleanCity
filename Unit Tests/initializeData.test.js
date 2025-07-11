const { STORAGE_KEYS, initializeData } = require('./initializeData');

// Mock localStorage for testing 
const localStorageMock = () => {
    // this holds the mock data/local storage
    let store = {}; 
    return {
        getItem: jest.fn(
            (key) => store[key] || null
        ),
        setItem: jest.fn(
            (key, value) => { store[key] = value;}
        ),
        removeItem: jest.fn(
            (key) => { delete store[key];}
        ),
        clear: jest.fn(
            () => {store = {};}
        )
    };
};
// the code below is used to test the initializeData function
describe('initializeData', () => {
    let localStorage;

    beforeEach(() => {
        localStorage = localStorageMock();
        global.localStorage = localStorage;
        jest.clearAllMocks();
    });

// the code below tests the initializeData function to ensure it initializes the pickup requests, feedback, and users data in localStorage if they do not already exist
    test('should initialize pickup requests if not present', () => {
        initializeData();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            STORAGE_KEYS.PICKUP_REQUESTS,
            JSON.stringify([

                {   id: 'REQ001',
                    name: 'John Doe',
                    location: 'Nairobi', wasteType: 'General Waste', preferredDate: '2024-01-15', status: 'Pending' 
                },

                {   id: 'REQ002', 
                    name: 'Jane Smith',
                    location: 'Kisumu', 
                    wasteType: 'Recyclable', preferredDate: '2024-01-16', status: 'Scheduled'
                 },

                {    id: 'REQ003',
                     name: 'Mike Johnson', location: 'Mombasa', wasteType: 'Hazardous', preferredDate: '2024-01-17', status: 'Completed' 
                },

                {    id: 'REQ004',
                     name: 'Sarah Wilson', 
                     location: 'Eldoret', 
                     wasteType: 'General Waste', 
                     preferredDate: '2024-01-18', 
                     status: 'Pending' 
                },

                {    id: 'REQ005',
                     name: 'David Brown', location: 'Nairobi', wasteType: 'Recyclable', preferredDate: '2024-01-19', status: 'Missed' 
                }
            ])
        );
    });

    test('should not reinitialize pickup requests if already present', () => {
        localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify([]));
        initializeData();
        expect(localStorage.setItem).not.toHaveBeenCalledWith(STORAGE_KEYS.PICKUP_REQUESTS, expect.anything());
    });

    test('should initialize feedback if not present', () => {
        initializeData();
        expect(localStorage.setItem).toHaveBeenCalledWith(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
    });

    test('should not reinitialize feedback if already present', () => {
        localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
        initializeData();
        expect(localStorage.setItem).not.toHaveBeenCalledWith(STORAGE_KEYS.FEEDBACK, expect.anything());
    });
});



