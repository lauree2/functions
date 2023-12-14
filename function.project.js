

// Simulating asynchronous data fetching
function readData(callback) {
  setTimeout(function () {
    // Simulated data
    let data = [10, 20, 30, 40, 50];
    
    // Pass the data to the callback function
    callback(data);
  }, 2000); // Simulating a 2-second delay
}

// Process the fetched data
function processData(data) {
  let sum = 0;

  // Calculate the sum using a loop
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }

  // Display the results
  console.log("read Data: " + data);
  console.log("Sum of Data: " + sum);
}

// Fetch data and process it using a callback
readData(processData);

