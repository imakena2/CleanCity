const STORAGE_KEYS = {
  PICKUP_REQUESTS: 'cleancity_pickup_requests',
  FEEDBACK: 'cleancity_feedback',
  USERS: 'cleancity_users'
};

// Initialize with sample data if no data exists
const initializeData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) {
    const sampleRequests = [
      {
        id: 'REQ001',
        name: 'John Doe',
        location: 'Nairobi',
        wasteType: 'General Waste',
        preferredDate: '2024-01-15',
        status: 'Pending'
      },
      {
        id: 'REQ002',
        name: 'Jane Smith',
        location: 'Kisumu',
        wasteType: 'Recyclable',
        preferredDate: '2024-01-16',
        status: 'Scheduled'
      },
      {
        id: 'REQ003',
        name: 'Mike Johnson',
        location: 'Mombasa',
        wasteType: 'Hazardous',
        preferredDate: '2024-01-17',
        status: 'Completed'
      },
      {
        id: 'REQ004',
        name: 'Sarah Wilson',
        location: 'Eldoret',
        wasteType: 'General Waste',
        preferredDate: '2024-01-18',
        status: 'Pending'
      },
      {
        id: 'REQ005',
        name: 'David Brown',
        location: 'Nairobi',
        wasteType: 'Recyclable',
        preferredDate: '2024-01-19',
        status: 'Missed'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(sampleRequests));
  }
// the code below initializes the feedback and users data in localStorage if they do not already exist
  if (!localStorage.getItem(STORAGE_KEYS.FEEDBACK)) {
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const sampleUsers = [
      {
        id: '1',
        name: 'Demo User',
        email: 'user@cleancity.com',
        password: 'password123', // Plain text password (vulnerable)
        role: 'user',
        createdAt: '2024-01-01T00:00:00.000Z'
      },
      {
        id: '2',
        name: 'Admin User',
        email: 'admin@cleancity.com',
        password: 'admin123', // Plain text password (vulnerable)
        role: 'admin',
        createdAt: '2024-01-01T00:00:00.000Z'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(sampleUsers));
  }
};

// Initialize data on module load
initializeData();

module.exports = { STORAGE_KEYS, initializeData };