const register = require('./register');

describe('register', () => {
  let mockDataService;
  let mockShowMessage;

  beforeEach(() => {
    mockShowMessage = jest.fn();
  });

  test('should register a new user successfully', () => {
    mockDataService = {
      getAllUsers: jest.fn(() => []), 
      addUser: jest.fn(() => true)    
    };

    const userData = {
      name: 'Wairimu Joan',
      email: 'joanwairiimu@gmail.com',
      password: 'uu19jn@Wgtujn'
    };

    const result = register(userData, mockDataService, mockShowMessage);

    expect(result).toBe(true);
    expect(mockDataService.getAllUsers).toHaveBeenCalled();
    expect(mockDataService.addUser).toHaveBeenCalledWith(expect.objectContaining({
        name: 'Wairimu Joan',
        email: 'joanwairiimu@gmail.com',
        password: 'uu19jn@Wgtujn'
    }));
    expect(mockShowMessage).toHaveBeenCalledWith('register-success', expect.stringContaining('Registration successful'));
  });

  test('should not register if email already exists', () => {
    mockDataService = {
      getAllUsers: jest.fn(() => [
        { email: 'joanwairiimu@gmail.com' } // Already exists
      ]),
      addUser: jest.fn()
    };

    const userData = {
        name: 'Wairimu Joan',
        email: 'joanwairiimu@gmail.com',
        password: 'uu19jn@Wgtujn'
    };

    const result = register(userData, mockDataService, mockShowMessage);

    expect(result).toBe(false);
    expect(mockDataService.getAllUsers).toHaveBeenCalled();
    expect(mockDataService.addUser).not.toHaveBeenCalled();
    expect(mockShowMessage).toHaveBeenCalledWith('register-error', expect.stringContaining('already exists'));
  });

  test('should show error if user creation fails', () => {
    mockDataService = {
      getAllUsers: jest.fn(() => []),      
      addUser: jest.fn(() => false)        
    };

    const userData = {
      name: 'Paulina Anne',
      email: 'paulinanne@gmail.com',
      password: 'trailblazer9712!'
    };

    const result = register(userData, mockDataService, mockShowMessage);

    expect(result).toBe(false);
    expect(mockDataService.addUser).toHaveBeenCalled();
    expect(mockShowMessage).toHaveBeenCalledWith('register-error', expect.stringContaining('Registration failed'));
  });

    test('should handle empty user data', () => {
        mockDataService = {
        getAllUsers: jest.fn(() => []), 
        addUser: jest.fn(() => true)    
        };
    
        const userData = {
        name: '',
        email: '',
        password: ''
        };
    
        const result = register(userData, mockDataService, mockShowMessage);
    
        expect(result).toBe(false);
        expect(mockShowMessage).toHaveBeenCalledWith('register-error', expect.stringContaining('Please fill in all the fields'));
    });
});
