fetch('https://api.github.com/users/manishmshiva')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(data => console.log(data))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors