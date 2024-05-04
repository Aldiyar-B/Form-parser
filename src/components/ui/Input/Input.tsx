import React from "react";
import styles from "./Input.module.css";

interface InputProps {
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	type?: string;
	variant?: "default" | "error";
	required?: boolean;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
}

const Input: React.FC<InputProps> = ({
	placeholder = "",
	value,
	onChange,
	disabled = false,
	type = "text",
	variant = "default",
	required = false,
	maxLength,
	minLength,
	pattern
}) => {
	return (
		<div className={styles.inputWrapper}>
			<input
				className={`${styles.input} ${styles[variant]}`}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				disabled={disabled}
				type={type}
				required={required}
				maxLength={maxLength}
				minLength={minLength}
				pattern={pattern}
			/>
		</div>
	)
}

export default Input;