function setupAdminControls(requests,dataService, loadAdminData) {
    const requestSelect = document.getElementById('requestSelect');
    const statusSelect = document.getElementById('statusSelect');
    const updateBtn = document.getElementById('updateStatusBtn');
    
    if (requestSelect) {
      // Populate request select
      requestSelect.innerHTML = '<option value="">Choose a request...</option>';
      requests.forEach(request => {
        const option = document.createElement('option');
        option.value = request.id;
        option.textContent = `${request.id} - ${request.name} (${request.location})`;
        requestSelect.appendChild(option);
      });
    }
    
    if (updateBtn) {
      // Handle status update
      updateBtn.addEventListener('click', () => {
        const requestId = requestSelect ? requestSelect.value : '';
        const newStatus = statusSelect ? statusSelect.value : '';
        
        if (requestId && newStatus) {
          const success = dataService.updateRequestStatus(requestId, newStatus);
          if (success) {
            alert('Request status updated successfully!');
            loadAdminData(); // Reload data
            if (requestSelect) requestSelect.value = '';
            if (statusSelect) statusSelect.value = '';
            updateBtn.disabled = true;
          } else {
            alert('Failed to update request status');
          }
        } else {
          alert('Please select both a request and a new status');
        }
      });
      
      // Enable/disable update button based on selections
      function updateButtonState() {
        updateBtn.disabled = !(requestSelect && requestSelect.value) || !(statusSelect && statusSelect.value);
      }
      
      if (requestSelect) requestSelect.addEventListener('change', updateButtonState);
      if (statusSelect) statusSelect.addEventListener('change', updateButtonState);
    }
  }

  module.exports = setupAdminControls;
