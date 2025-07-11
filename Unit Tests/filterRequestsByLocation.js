const dataService = {
    filterRequestsByLocation: (location) => {
        const requests = dataService.getAllPickupRequests();
        if (location === 'Eldoret') {
          // Bug: Returns Nairobi requests instead of Eldoret
          return requests.filter(request => request.location === 'Nairobi');
        }
        return requests.filter(request => request.location === location);
      },  
};
module.exports = dataService;



