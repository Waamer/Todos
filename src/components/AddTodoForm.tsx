import { useState } from "react"

interface AddTodoProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoProps) {
    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input.trim()) {return}

        onSubmit(input);
        setInput("");
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="What needs to be done?" className="p-2 border outline-none rounded-s-md grow caret-indigo-400"/>
            <button type="submit" className="w-16 text-white transition-all duration-200 bg-indigo-900 rounded-e-md hover:bg-indigo-700">Add</button>
        </form>
    )
}