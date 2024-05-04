import React, { useState } from 'react';
import styles from './Select.module.css';
import { FormFieldOption } from '../../../types/types';
interface SelectProps {
	options: FormFieldOption[];
	value: string;
	onChange: (value: string) => void;
	multiple?: boolean;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, multiple = false }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleOptionClick = (value: string) => {
		onChange(value);
		setIsOpen(false);
	};

	return (
		<div className={styles.dropdown}>
			<div className={styles.control} onClick={toggleDropdown}>
				<div className={styles.selectedValue}>
					{value}
				</div>
				<div className={styles.arrow}>{isOpen ? '▲' : '▼'}</div>
			</div>
			{isOpen && (
				<div className={styles.options}>
					{options.map(option => (
						<div
							key={option.value}
							className={`${styles.option} ${option.value === value ? styles.selected : ''}`}
							onClick={() => handleOptionClick(option.value)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;