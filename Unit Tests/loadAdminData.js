function loadAdminData(dataService, displayAdminRequests, updateStatistics, setupAdminControls) {
    const requests = dataService.getAllPickupRequests();
    displayAdminRequests(requests);
    updateStatistics(requests);
    setupAdminControls(requests);
  }

  module.exports = loadAdminData;