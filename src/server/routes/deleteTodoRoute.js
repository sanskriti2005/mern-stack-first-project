import { TodoModel } from "../models/TodoModel.js"


export const deleteTodoRoute = async (req, res) => {
    const { id } = req.params;
    const todo = await TodoModel.findByIdAndDelete(id);
    res.status(204).json(todo);
}