import { Dispatch, FC, useRef } from "react";
import "./style.css";

interface Props {
	todo: string;
	setTodo: Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputFelid: FC<Props> = ({ todo, setTodo, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	};

	return (
		<form
			className="input"
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input
				type="text"
				placeholder="Enter task"
				className="input__box"
				ref={inputRef}
				value={todo}
				onChange={handelChange}
			/>
			<button className="input_submit" type="submit">
				Go
			</button>
		</form>
	);
};

export default InputFelid;
