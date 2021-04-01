import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

class BookRepository {
  baseUrl = process.env.BASE_URL

  // Code functions here like this
  getAll(): Promise<Book> {
    return fetch(`${this.baseUrl}/books`, { 
      method: "GET",
    })
      .then((authors) => authors.json())
      .then((result) => { return result})
      .catch((error) => console.error(error))
    }
    getOne(id: number): Promise<Book> {
      return fetch(`${this.baseUrl}/books/${id}`, {
        method: "GET",
      })
        .then((info) => info.json())
        .then((idAuthor) => { return idAuthor })
        .catch((error) => console.error(error))
    }
    getBookComments(id: number): Promise<Comment[]> {
      return fetch(`${this.baseUrl}/books/${id}/comments`, {
        method: "GET",
      })
      .then((info) => info.json())
      .then((bookComments) => { 
        return bookComments })
      .catch((error) => console.error(error));
    }
    searchByTitle(term: string): Promise<Book[]> {
      return fetch(`${this.baseUrl}/books?q=${term}`, {
        method: "GET",
      })
      .then((bookByTitle) => bookByTitle.json())
      .then((term) => { return term })
      .catch((error) => console.error(error))
    }
}

// Leave the line below for tests to work
export {
  BookRepository
}
