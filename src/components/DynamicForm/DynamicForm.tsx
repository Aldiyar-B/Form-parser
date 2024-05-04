// DynamicForm.tsx
import React, { useState } from 'react';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import Select from '../ui/Select/Select';
import { DynamicFormProps, FormField, FormFieldOption } from '../../types/types';

const DynamicForm: React.FC<DynamicFormProps> = ({ formData }) => {
	const [formState, setFormState] = useState<{ [key: string]: any }>({});

	const handleInputChange = (id: string, value: any) => {
		setFormState(prev => ({ ...prev, [id]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Form Data Submitted:", formState);
	};

	const renderField = (field: FormField) => {
		switch (field.type) {
			case 'textarea':
				return <Input type="textarea" placeholder={field.placeholder} value={formState[field.id] || ''}
					onChange={(e) => handleInputChange(field.id, e.target.value)} required={field.required} />;
			case 'select':
				return <Select options={field.options || []} value={formState[field.id] || ''} onChange={(value) => handleInputChange(field.id, value)} />;
			case 'text':
			case 'password':
			case 'email':
			default:
				return <Input type={field.type} placeholder={field.placeholder} value={formState[field.id] || ''}
					onChange={(e) => handleInputChange(field.id, e.target.value)} required={field.required}
					maxLength={field.maxlength} minLength={field.minlength} pattern={field.pattern} />;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>{formData.form_name}</h1>
			<p>{formData.form_description}</p>
			{formData.form_fields.map(field => (
				<div key={field.id}>
					<label>{field.label}: {renderField(field)}</label>
				</div>
			))}
			{formData.form_buttons.map(button => (
				<Button key={button.name} label={button.name} onClick={() => { }} type={button.type} />
			))}
		</form>
	);
};

export default DynamicForm;
