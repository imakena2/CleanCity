function displayPickupErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Display new errors
    if (errors.fullName) {
      document.getElementById('name-error').textContent = errors.fullName;
    }
    if (errors.location) {
      document.getElementById('location-error').textContent = errors.location;
    }
    if (errors.wasteType) {
      document.getElementById('waste-error').textContent = errors.wasteType;
    }
  }

  module.exports = displayPickupErrors;

  