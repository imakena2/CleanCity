const {dataService,  STORAGE_KEYS} = {
    addPickupRequest: (requestData) => {
        try {
          const requests = dataService.getAllPickupRequests();
          const newRequest = {
            id: `REQ${String(requests.length + 1).padStart(3, '0')}`,
            name: requestData.fullName,
            location: requestData.location,
            wasteType: requestData.wasteType,
            preferredDate: requestData.preferredDate || 'Not specified',
            status: 'Pending'
          };
          
          requests.push(newRequest);
          localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(requests));
          return newRequest;
        } catch (error) {
          console.error('Error adding pickup request:', error);
          return null;
        }
      },
}

module.exports = {dataService, STORAGE_KEYS};




