const apiKey = "c58cxRTEMB-jYkJcxwDm1Csval9MriDhbQ0Z3QcjYz5KmY3dBl982Hy32dE7pa1aGlTD5HreU91MloQJ27uMqr7gQS_igJBRz3-dKQHIAqZpbow2RgCajGCfXBNjYnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then((response) => {
      return response.json();
    })
  }
}