function fetchSimpsonQuotes() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
  
  axios.get(url)
    .then(function(response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function(simpson) {
    // Build a block of HTML    
      const simsponQuote = `
        <h2>Quote from : ${simpson[0].character}</h2>
        <p><strong>${simpson[0].quote}</strong></p>
        <img src="${simpson[0].image}" />
      `;  
      document.querySelector('#simpson-quote').innerHTML = simsponQuote;
    });
}

fetchSimpsonQuotes();