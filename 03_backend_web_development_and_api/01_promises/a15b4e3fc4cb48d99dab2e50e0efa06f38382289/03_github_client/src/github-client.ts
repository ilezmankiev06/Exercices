import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    // You code goes here
    return new Promise((resolve) => {
      getReposUrlByNickname(nickname);
      resolve(nickname);
    });
  }

  static getRepos(url: string): Promise<string> {
    // You code goes here
    return new Promise((resolve) => {
    listRepos(url);
    resolve(url);
    })
  }

  // static printRepos() {
  //   // You code goes here


  // }

  
  // static printRepository() {
  //   // You code goes here

  // }
  
  static getProjectInformations(url: string): Promise<string> {
    // You code goes here
    return new Promise((resolve) => {
      getOneRepoInfos(url);
      resolve("");
    })
  }
}
