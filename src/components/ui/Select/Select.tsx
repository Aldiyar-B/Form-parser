import React, { useState } from 'react';
import styles from './Select.module.css';

// Define the interface for an option
interface Option {
	value: string;
	label: string;
}

// Define the props for the Select component
interface SelectProps {
	options: Option[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<Option | null>(null);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleOptionClick = (option: Option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className={styles.dropdown}>
			<div className={styles.control} onClick={toggleDropdown}>
				<div className={styles.selectedValue}>
					{selectedOption ? selectedOption.label : 'Your country'}
				</div>
				<div className={styles.arrow}>{isOpen ? '▲' : '▼'}</div>
			</div>
			{isOpen && (
				<div className={styles.options}>
					{options.map(option => (
						<div
							key={option.value}
							className={`${styles.option} ${option.value === selectedOption?.value ? styles.selected : ''}`}
							onClick={() => handleOptionClick(option)}
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
