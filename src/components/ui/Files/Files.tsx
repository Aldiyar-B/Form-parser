import React, { useState } from 'react';
import styles from './Files.module.css';

const FileUploader = () => {
	// Либо объект файла либо он пустой 
	const [file, setFile] = useState<File | null>(null);
	const [error, setError] = useState<string>('');

	// Когда поле ввода файла меняется, вызов этой функции
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0]; // May be undefined if no file is selected

		// Check if selectedFile is undefined and explicitly set file to null
		if (!selectedFile) {
			setFile(null); // Ensure that we're setting to null if no file is selected
			setError('No file selected or file access was denied.');
			return; // Early return to prevent further execution
		}

		if (selectedFile.size > 10485760) { // 10 MB limit
			setError('File size should not exceed 10 MB');
			setFile(null);
		} else {
			setError('');
			setFile(selectedFile); // Now selectedFile is guaranteed to be a File object, not undefined
		}
	};


	const handleFileUpload = () => {
		if (file) {
			alert(`Uploading ${file.name}`);

		}
	};

	return (
		<div className={`${styles.fileUploader} ${file ? styles.fileUploaderSelected : ''}`}>
			{/* <input type="file" onChange={handleFileChange} /> */}
			<input type="file" id="file" className={styles.fileInput} accept=".json,.png" onChange={handleFileChange} />
			{(!file && !error) && (
				// <p className={styles.grey}>PNG, jpg, gif files up to 10 MB in size are available for download</p>
				<label className={styles.fileLink} htmlFor="file"> <span className={styles.purple}> Select a file </span> or drag in form</label>
			)}
			{file && (
				<div className={styles.fileInfo}>
					<p>
						{file.name} - <span className={styles.grey}>{Math.round(file.size / 1024)} KB</span>
					</p>
					<button onClick={() => setFile(null)} className={styles.deleteButton}>Delete file</button>
				</div>
			)}
			{(!file && !error) && (
				<p className={styles.grey}>PNG, jpg, gif files up to 10 MB in size are available for download</p>
			)}


			{error && <div className={styles.error}>{error}</div>}

			{/* <button onClick={handleFileUpload} disabled={!file || !!error} className={styles.uploadButton}>Upload file</button> */}
		</div>
	);
};

export default FileUploader;
