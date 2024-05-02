import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	label: string;
	onClick: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled = false,
	type = "button",
	variant = "primary"
}) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]}`}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{label}
		</button>
	)
}

export default Button;