import { capitalize } from "./capitalize"

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  return sentence
    .toLowerCase()
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");
}

console.log(context("I'm a little tea pot"));
