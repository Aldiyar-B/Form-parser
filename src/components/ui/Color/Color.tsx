import React, { useState } from 'react';
import styles from './Color.module.css';

// Defining color types for TypeScript
type Color = string;

const colors: Color[] = [
	'#d9d9d9', '#a6a6a6', '#808080', '#595959', '#404040', '#262626', '#0d0d0d'
];

const Color: React.FC = () => {
	const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggleDropdown = () => setIsOpen(!isOpen);

	const handleColorSelect = (color: Color) => {
		setSelectedColor(color);
		setIsOpen(false); // Close dropdown upon selection
	};

	return (
		<div className={styles.container}>
			<div
				className={styles.selectedColor}
				style={{ backgroundColor: selectedColor }}
				onClick={handleToggleDropdown}
				aria-haspopup="true"
				aria-expanded={isOpen}
			>
				<div className={styles.arrow}>
					{isOpen ? '▲' : '▼'}
				</div>
			</div>
			{isOpen && (
				<div className={styles.dropdown}>
					{colors.filter(color => color !== selectedColor).map(color => (
						<div
							key={color}
							className={styles.colorSquare}
							style={{ backgroundColor: color }}
							onClick={() => handleColorSelect(color)}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Color;
