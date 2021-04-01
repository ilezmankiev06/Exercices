import fetch from "node-fetch";
import { PresentationRepo } from "./types"

function getRepos(url: string): Promise<PresentationRepo[]> {
  // code the function here
  return fetch("")
  .then()
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getRepos }
