import { useState } from "react";
import "./App.css";
import InputFelid from "./components/InputFelid";
import TodoList from "./components/TodoList";
import { Todo } from "./type";

const App = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};


	return (
		<div className="App">
			<span className="heading">Taskify</span>
			<InputFelid todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			{/* todoList */}
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
