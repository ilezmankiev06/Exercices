import express, {Request, Response} from "express"

export const app = express()
app.get("/", (request: Request, response: Response) => {
    console.log(request.headers)

    response.status(200).end("OK")
})
