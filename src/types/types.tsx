// types.ts
export type InputType = "text" | "password" | "email" | "textarea" | "file" | "checkbox" | "select" | "color";

export interface FormFieldOption {
	value: string;
	label: string;
}

export interface FormField {
	id: string;
	type: InputType;
	label: string;
	required: boolean;
	placeholder?: string;
	maxlength?: number;
	minlength?: number;
	pattern?: string;
	options?: FormFieldOption[];
	formats?: string;
	max_size?: number;
	max_count?: number;
	mask?: string;
	multiple?: boolean;
}

export interface FormButton {
	name: string;
	type: 'button' | 'submit';
}

export interface FormData {
	form_name: string;
	form_description?: string;
	form_fields: FormField[];
	form_buttons: FormButton[];
}

export interface DynamicFormProps {
	formData: FormData;
}

export interface FileUploaderProps {
	onFileLoad: (data: FormData) => void;
}
