const logout = require('./logout');

describe('logout)', () => {
    let dataService;
    let navigateToPage;
    let currentUser;
    
    beforeEach(() => {
        dataService = {
        logout: jest.fn(),
        };
        navigateToPage = jest.fn();
        currentUser = { name: 'Test User' };
    });
    
    test ('should call dataService.logout', () => {
        logout(dataService, navigateToPage, currentUser);
        expect(dataService.logout).toHaveBeenCalled();
    });
    
    test ('should navigate to home page', () => {
        logout(dataService, navigateToPage, currentUser);
        expect(navigateToPage).toHaveBeenCalledWith('home');
    });
    
});