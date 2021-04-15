import fetch, { Response } from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL

  // Code functions here like this
  getAll(): Promise<Response> {
    return fetch(`${this.baseUrl}/authors`, { 
      method: "GET",
    })
      .then((authors) => authors.json())
      .then((result) => { return result})
      .catch((error) => console.error(error))
    }
    
  getOne(id: number): Promise<Author> {
    return fetch(`${this.baseUrl}/authors/${id}`, {
      method: "GET",
    })
      .then((info) => info.json())
      .then((idAuthor) => { return idAuthor })
      .catch((error) => console.error(error))
  }
  getAuthorBooks(id: number): Promise<Book[]> {
    return fetch(`${this.baseUrl}/authors/${id}/books`, {
      method: "GET",
    })
    .then((info) => info.json())
    .then((authorBook) => { 
      return authorBook })
    .catch((error) => console.error(error));
  }
  searchByName(term: string): Promise<Author[]> {
    return fetch(`${this.baseUrl}/authors?q=${term}`, {
      method: "GET",
    })
    .then((authorsByName) => authorsByName.json())
    .then((term) => { return term })
    .catch((error) => console.error(error))
  }
}
// Leave the line below for tests to work
export {
  AuthorRepository
}
