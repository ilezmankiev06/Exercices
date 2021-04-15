import fetch from "node-fetch"

function getCategories(): Promise<void> {
  // code the function here
  return fetch('https://api.chucknorris.io/jokes/categories')
    .then((responces) => responces.json())
    .then((html) => console.log(html))
    .catch((error) => console.error(error));
    }

// leave line below for tests to work properly
export { getCategories }
