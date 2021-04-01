import { ProjectInformation } from "./types"
import fetch from "node-fetch";

function getProjectInformation(url: string): Promise<ProjectInformation> {
  // code the function here
  return fetch("")
  .then()
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getProjectInformation }
