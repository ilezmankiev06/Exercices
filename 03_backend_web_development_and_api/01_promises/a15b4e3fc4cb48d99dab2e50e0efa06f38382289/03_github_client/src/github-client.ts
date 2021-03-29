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
      const url = getReposUrlByNickname(nickname).catch((error => console.error(error)));
      resolve(url);
    });
  }

  static getRepos(url: string): Promise<string> {
    // You code goes here
    return new Promise((resolve) => {
    listRepos(url);
    resolve(url);
    })
  }

  static printRepos() {
    // You code goes here


  }

  
  static printRepository() {
    // You code goes here

  }
  
  static getProjectInformations(url: string) {
    // You code goes here
    getOneRepoInfos(url);
  }
}
