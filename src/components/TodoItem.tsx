import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemsProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemsProps) {
    return (
        <div className="flex items-center">
            <label className="flex items-center gap-2 p-2 px-2.5 duration-200 bg-white hover:border-e-2 hover:border-indigo-950 rounded-s-md hover:bg-indigo-900 hover:text-white grow">
                <input type="checkbox" checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} className="scale-125 accent-indigo-500"/>
                <span className={todo.completed ? "line-through text-gray-400 select-none" : "select-none"}>{todo.title}</span>
            </label>
            <button onClick={() => onDelete(todo.id)} className="p-2.5 text-white transition-all duration-200 bg-indigo-900 rounded-e-md hover:bg-indigo-700"><Trash2 size={20} /></button>
        </div>
    )
}