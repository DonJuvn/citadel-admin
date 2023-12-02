'use strict';

// const fetchData = async(url) {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       return data; // No need to modify this part unless you want to process the data further
//     })
//     .catch(error => {
//       console.error('Fetch error:', error);
//     });
// }

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/monthly_reports/monthly_reports/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Example usage
const monthly_reports = fetchData('http://localhost:8000/api/monthly_reports/monthly_reports/')
  .then(data => {
    // Check if data is an array and not empty
    if (Array.isArray(data) && data.length > 0) {
      // Access deal_volume of the first object
      console.log(data[0].deal_volume);
    } else {
      console.log('No data or empty array returned.');
    }
  });

export default fetchData;