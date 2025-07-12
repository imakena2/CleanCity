function logout(dataService, navigateToPage, currentUser) {
    dataService.logout();
    currentUser = null;
    navigateToPage('home');
  }

module.exports = logout;
  