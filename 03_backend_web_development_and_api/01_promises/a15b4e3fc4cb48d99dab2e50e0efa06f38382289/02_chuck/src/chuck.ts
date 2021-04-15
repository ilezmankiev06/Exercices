import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return getChuckCategories();
}

function getJoke(category: string): Promise<string> {
  return new Promise((resolve) => {
    const joke = getChuckJoke(category).then((jok) => jok.value);
    resolve(joke);
  });
}

//getCategories().then((cat) => console.log(cat));

// getChuckJoke("science").then((blague) => console.log(blague));

// Leave the line below for tests to work properly
export { getCategories, getJoke };
