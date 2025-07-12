function updateStatistics(requests) {
    const totalRequests = document.getElementById('totalRequests');
    const pendingRequests = document.getElementById('pendingRequests');
    const scheduledRequests = document.getElementById('scheduledRequests');
    const completedRequests = document.getElementById('completedRequests');
    
    if (totalRequests) totalRequests.textContent = requests.length;
    if (pendingRequests) pendingRequests.textContent = requests.filter(r => r.status === 'Pending').length;
    if (scheduledRequests) scheduledRequests.textContent = requests.filter(r => r.status === 'Scheduled').length;
    if (completedRequests) completedRequests.textContent = requests.filter(r => r.status === 'Completed').length;
  }

  module.exports = updateStatistics;