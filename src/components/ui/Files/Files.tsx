// FileUploader.tsx
import React, { useState } from 'react';
import styles from './Files.module.css';
import { FileUploaderProps } from '../../../types/types';
const FileUploader: React.FC<FileUploaderProps> = ({ onFileLoad }) => {
	const [file, setFile] = useState<File | null>(null);
	const [error, setError] = useState<string>('');

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (!selectedFile) {
			setFile(null);
			setError('No file selected or file access was denied.');
			return;
		}

		if (selectedFile.size > 10485760) { // 10 MB limit
			setError('File size should not exceed 10 MB');
			setFile(null);
		} else {
			setError('');
			setFile(selectedFile);
			const reader = new FileReader();
			reader.onload = (e) => {
				const text = e.target?.result as string;
				try {
					const json = JSON.parse(text);
					onFileLoad(json);
				} catch (err) {
					setError('Error parsing JSON!');
					console.error('Error reading JSON:', err);
				}
			};
			reader.readAsText(selectedFile);
		}
	};

	return (
		<div className={`${styles.fileUploader} ${file ? styles.fileUploaderSelected : ''}`}>
			<input type="file" id="file" className={styles.fileInput} accept=".json" onChange={handleFileChange} />
			{(!file && !error) && (
				<label className={styles.fileLink} htmlFor="file"> <span className={styles.purple}> Select a file </span> or drag in form</label>
			)}
			{file && (
				<div className={styles.fileInfo}>
					<p>{file.name} - <span className={styles.grey}>{Math.round(file.size / 1024)} KB</span></p>
					<button onClick={() => setFile(null)} className={styles.deleteButton}>Delete file</button>
				</div>
			)}
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
};

export default FileUploader;
