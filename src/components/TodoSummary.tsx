import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {

    const completedTodos = todos.filter(todos => todos.completed)

    return (
        <div className="space-y-1.5 text-center">
            <p className="text-xl select-none text-indigo-300/75">
                {completedTodos.length}/{todos.length} completed
            </p>
            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted} className="text-lg text-red-400 transition-all duration-200 select-none hover:underline">Delete all completed</button>
            )}
        </div>
    )
}