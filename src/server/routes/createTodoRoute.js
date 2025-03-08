import { TodoModel } from "../models/TodoModel.js"


export const createTodoRoute = (req, res) => {
    const todos = TodoModel.find()
    const { text } = req.body;
    res.send(text)
}