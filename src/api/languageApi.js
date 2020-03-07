const endpoint = "http://localhost:8000/languages";

function getLanguages() {
  return fetch(endpoint)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(err);
    });
}

export { getLanguages };
