import fetch from "node-fetch";

function getReposUrl(githubNickname: string): Promise<string> {
  // code the function here
  return fetch("https://developer.github.com/v3/users")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Page not found");
    } else {
      return response.json();
    }
  })
  .then((result) => { return result})
  .catch((error) => console.error(error))
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getReposUrl }
