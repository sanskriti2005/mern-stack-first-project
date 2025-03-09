import { TodoModel } from "../models/TodoModel.js"


export const createTodoRoute = async (req, res) => {
    // const todos = TodoModel.find()
    const { text } = req.body;
    const todo = new TodoModel({
        text,
        completed: false
    })
    const newTodo = await todo.save();
    res.json(newTodo)
}