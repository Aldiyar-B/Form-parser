// Checkbox.js
import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
	label: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	error?: boolean;
	required?: boolean;

}

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked,
	onChange,
	disabled = false,
	error = false,
	required = false,

}) => {
	return (
		<label className={styles.container}>
			{label}
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className={`${styles.checkbox} ${error ? styles.error : ""}`}
				required={required}
			/>
			<span className={styles.checkmark}></span>
		</label>
	);
};

export default Checkbox;
