function register(userData, dataService, showMessage) {
    // Check if user already exists
    const users = dataService.getAllUsers();
    const existingUser = users.find(u => u.email === userData.email);
    
    if (existingUser) {
      showMessage('register-error', 'User with this email already exists');
      return false;
    }
    
    // Create new user (vulnerable - stores plain text passwords)
    const newUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      password: userData.password, // Stored in plain text
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    const success = dataService.addUser(newUser);
    
    if (success) {
      showMessage('register-success', 'Registration successful! You can now login.');
      return true;
    } else {
      showMessage('register-error', 'Registration failed. Please try again.');
      return false;
    }
  }

  module.exports = register;

  