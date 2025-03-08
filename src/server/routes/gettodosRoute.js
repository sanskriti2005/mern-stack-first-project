import { TodoModel } from "../models/TodoModel.js"


export const gettodosRoute = async (req, res) => {
    const todos = await TodoModel.find()
    res.json(todos)
}