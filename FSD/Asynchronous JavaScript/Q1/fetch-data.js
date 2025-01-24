

document.getElementById('fetchData').addEventListener('click', () => {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = 'Loading...'; 
    // (Random Dog Image)
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        // Check if the response is successful 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // (in this case, a random dog image)
        dataDiv.innerHTML = `<img src="${data.message}" alt="Random Dog Image" style="max-width: 100%; height: auto;">`;
      })
      .catch(error => {
       
        dataDiv.innerHTML = `Error: ${error.message}`;
      });
  });
  