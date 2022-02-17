import React, { FC, useRef, useState } from "react";
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
	const handleDone = (id: number) => {
		let i = id;
	};

	return (
		<form className={`todos__single`}>
			<span className="todos__single--text">{todo.todo}</span>
			<div>
				<span className="icon">
					<AiFillEdit />
				</span>
				<span className="icon">
					<AiFillDelete />
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					<MdDone />
				</span>
			</div>
		</form>
	);
};
export default SingleTodo;

// <input
// 				value={editTodo}
// 				onChange={(e) => setEditTodo(e.target.value)}
// 				className="todos__single--text"
// 				// ref={inputRef}
// 			/>
// 			<s className="todos__single--text">{todo.todo}</s>
