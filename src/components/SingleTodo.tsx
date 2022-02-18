import React, { FC, useEffect, useRef, useState } from "react";
// react-icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
// import { Draggable } from "react-beautiful-dnd";
import { Todo } from "../type";
// style
import "./style.css";

interface Props {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: FC<Props> = ({ todo, todos, setTodos }) => {
	// const inputRef = useRef<HTMLInputElement>(null);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);
	const [edit, setEdit] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	const handleEdit = (id: number) => {
		setEdit(!edit);
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, todo: editTodo } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todos) => todos.id !== id));
	};

	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};
	console.log(edit);

	return (
		<form className={`todos__single`}>
			{edit ? (
				<input
					value={editTodo}
					onChange={(e) => setEditTodo(e.target.value)}
					className="todos__single--text"
					type="text"
					ref={inputRef}
				/>
			) : todo.isDone ? (
				<s className="todos__single--text">{todo.todo}</s>
			) : (
				<span className="todos__single--text">{todo.todo}</span>
			)}

			<div>
				<span
					className="icon"
					onClick={() => {
						handleEdit(todo.id);
					}}
				>
					<AiFillEdit />
				</span>
				<span
					className="icon"
					onClick={() => {
						handleDelete(todo.id);
					}}
				>
					<AiFillDelete />
				</span>
				<span
					className="icon"
					onClick={() => {
						handleDone(todo.id);
					}}
				>
					<MdDone />
				</span>
			</div>
		</form>
	);
};
export default SingleTodo;

// 			<s className="todos__single--text">{todo.todo}</s>
