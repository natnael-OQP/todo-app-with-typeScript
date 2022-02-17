import React, { FC } from "react";
import { Todo } from "../type";
import SingleTodo from "./SingleTodo";
interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	// setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	// CompletedTodos: Todo[];
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
	return (
		<div className="todos">
			{todos.map((todo) => (
				<SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
			))}
		</div>
	);
};

export default TodoList;
