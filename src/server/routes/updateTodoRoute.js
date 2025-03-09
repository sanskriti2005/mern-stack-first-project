import { TodoModel } from "../models/TodoModel.js"


export const updateTodoRoute = async (req, res) => {
    const { id } = req.params
    const todo = await TodoModel.findById(id);
    todo.completed = req.body.completed
    todo.text = req.body.text
    const updatedTodo = await todo.save()
    res.json(updatedTodo)
}