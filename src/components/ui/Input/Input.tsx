import React from "react";
import styles from "./Input.module.css";

interface InputProps {
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	type?: string;
	variant?: "default" | "error";
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps> = ({

	placeholder = "",
	value = "",
	onChange,
	disabled = false,
	type = "text",
	variant = "default",
}) => {
	return (
		<div className={styles.inputWrapper}>
			{(value) && (
				<span className={`${styles.inputSpan}  `}>{placeholder}</span>
			)}
			<input
				className={`${styles.input} ${styles[variant]}`}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				disabled={disabled}
				type={type}
			/>
			{variant === "error" && (
				<span className={styles.errorText}>Обработка ошибки</span>
			)}
		</div >
	)
}

export default Input;