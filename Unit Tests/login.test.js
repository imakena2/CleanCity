const login = require('./login');

describe('login', () => {
  let mockDataService;
  let mockNavigateToPage;
  let mockShowMessage;
  let mockCurrentUser;

  beforeEach(() => {
    mockCurrentUser = null;

    mockDataService = {
      getAllUsers: jest.fn(() => [
        {
          id: 1,
          email: 'user@example.com',
          password: 'password123',
          name: 'Test User',
          role: 'admin',
        }
      ])
    };

    mockNavigateToPage = jest.fn();
    mockShowMessage = jest.fn();

    // Clear localStorage before each test
    localStorage.clear();
  });

  test('should login successfully with valid credentials', () => {
    const result = login(
      'user@example.com',
      'password123',
      mockDataService,
      mockNavigateToPage,
      mockShowMessage,
      mockCurrentUser
    );

    expect(result).toBe(true);
    expect(mockShowMessage).toHaveBeenCalledWith('login-success', expect.stringContaining('Login successful'));
    expect(mockNavigateToPage).not.toHaveBeenCalled(); 
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    expect(storedUser.email).toBe('user@example.com');
  });

  test('should fail login with invalid credentials', () => {
    const result = login(
      'gatwiirii@gmail.com',
      'wrongpass123',
      mockDataService,
      mockNavigateToPage,
      mockShowMessage,
      mockCurrentUser
    );

    expect(result).toBe(false);
    expect(mockShowMessage).toHaveBeenCalledWith('login-error', expect.stringContaining('Invalid email'));
    expect(localStorage.getItem('currentUser')).toBe(null);
  });
  
  test('should fail if password is short, for instance contains three characters', () => {
    const result = login(
        'ireri01@gmail.com',
        '1b3',
        mockDataService,
        mockNavigateToPage,
        mockShowMessage,
        mockCurrentUser
      );
    expect(result).toBe(false);
    expect(mockShowMessage).toHaveBeenCalledWith('login-error', expect.stringContaining('Invalid email'));
    expect(localStorage.getItem('currentUser')).toBe(null);
  });
    test('should fail if email is not valid', () => {
        const result = login(
        'gatwiri-email',
        'password123',
        mockDataService,
        mockNavigateToPage,
        mockShowMessage,
        mockCurrentUser
        );
    
        expect(result).toBe(false);
        expect(mockShowMessage).toHaveBeenCalledWith('login-error', expect.stringContaining('Invalid email'));
        expect(localStorage.getItem('currentUser')).toBe(null);
    });
});
 