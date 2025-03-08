import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    text:{
        type: String,
    },
    completed: {
        type: Boolean,
    }
});

export const TodoModel = mongoose.model('Todo', TodoSchema)

