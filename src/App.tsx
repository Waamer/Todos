import useTodos from "./hooks/useTodos"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import BackGround from "./components/BackGround"
import TodoSummary from "./components/TodoSummary"

function App() {

  const {todos, setTodoCompleted, addTodo, deleteTodo, deleteAllCompletedTodos} = useTodos();

  return (
    <>
      <main className="h-screen py-10 space-y-4 overflow-y-auto">
        <BackGround />
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-2 size-16 sm:size-20 text-indigo-400/45">
            <path fill-rule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75ZM10.5 7.963a1.5 1.5 0 0 0-2.17-1.341l-.415.207a.75.75 0 0 0 .67 1.342L9 7.963V9.75h-.75a.75.75 0 1 0 0 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0 0 16.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 1 0 0 1.5h.656a3.002 3.002 0 0 1-4.327 1.893.113.113 0 0 1-.045-.051.336.336 0 0 1-.034-.154V11.25h5.25a.75.75 0 0 0 0-1.5H10.5V7.963Z" clip-rule="evenodd" />
          </svg>
          <h1 className="text-6xl font-semibold leading-3 text-center select-none sm:text-7xl text-indigo-400/45">Your Todos</h1>
        </div>
        <div className="max-w-lg p-5 mx-auto space-y-6 sm:rounded-lg bg-indigo-300/60">
          <AddTodoForm onSubmit={addTodo}/>
          <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
        </div>
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>
      </main>
    </>
  )

}

export default App
