'use strict';

// Basic GET request
const daily_reports = fetch('http://localhost:8000/api/monthly_reports/monthly_reports/')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Process the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });
