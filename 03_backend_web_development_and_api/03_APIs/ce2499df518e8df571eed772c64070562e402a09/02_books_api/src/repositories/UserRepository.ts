import fetch, { Response } from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL

  // Code functions here like this
  getAll(): Promise<Response> {
    return fetch(`${this.baseUrl}/users`, { 
      method: "GET",
    })
      .then((user) => user.json())
      .then((result) => { return result})
      .catch((error) => console.error(error))
    }
    getOne(id: number): Promise<User> {
      return fetch(`${this.baseUrl}/users/${id}`, {
        method: "GET",
      })
        .then((info) => info.json())
        .then((idAuthor) => { return idAuthor })
        .catch((error) => console.error(error))
    }
    getUserComments(id: number): Promise<Comment[]> {
      return fetch(`${this.baseUrl}/users/${id}/comments`, {
        method: "GET",
      })
      .then((info) => info.json())
      .then((userComments) => { 
        return userComments })
      .catch((error) => console.error(error));
    }
    create(params: Record<string, unknown>): Promise<User> {
      return fetch(`${this.baseUrl}/users`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: { "Content-Type": "application/json" },
      })
      .then((info) => info.json())
      .then((user) => { 
        return user })
      .catch((error) => console.error(error));
    }
    update(id: number, params: Record<string, unknown>): Promise<User> {
      return fetch(`${this.baseUrl}/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify(params),
        headers: { "Content-Type": "application/json" },
      })
      .then((info) => info.json())
      .then((userComments) => { 
        return userComments })
      .catch((error) => console.error(error));
    }
    delete(id: number): Promise<User> {
      return fetch(`${this.baseUrl}/users/${id}`, {
        method: "DELETE",
      })
      .then((info) => info.json())
      .then((deletedUser) => { 
        return deletedUser })
      .catch((error) => console.error(error));
    }
}

// Leave the line below for tests to work
export {
  UserRepository
}
