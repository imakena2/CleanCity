
function login(email, password,dataService, navigateToPage, showMessage, currentUser) {
    // Simple authentication (vulnerable to various attacks)
    const users = dataService.getAllUsers();
    const user = users.find(u => 
      u.email === email && 
      u.password === password // Plain text password comparison
    );
    
    if (user) {
      // Store user session (vulnerable - no proper session management)
      const sessionUser = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      };
      
      localStorage.setItem('currentUser', JSON.stringify(sessionUser));
      currentUser = sessionUser;
      
      showMessage('login-success', 'Login successful! Redirecting...');
      setTimeout(() => {
        navigateToPage('dashboard');
      }, 1000);
      
      return true;
    } else {
      showMessage('login-error', 'Invalid email or password');
      return false;
    }
  }
  
  module.exports = login; 