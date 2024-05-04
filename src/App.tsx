// App.tsx
import React, { useState } from 'react';
import './App.css';
import DynamicForm from './components/DynamicForm/DynamicForm';
import FileUploader from './components/ui/Files/Files';
import { FormData, FormFieldOption } from './types/types';


const initialFormData: FormData =
{
  "form_name": "Авторизация",
  "form_fields": [
    {
      "id": "login",
      "type": "text",
      "label": "Логин",
      "required": true,
      "placeholder": "Введите ваш логин",
      "maxlength": 30
    },
    {
      "id": "password",
      "type": "password",
      "label": "Пароль",
      "required": true,
      "placeholder": "Введите ваш пароль",
      "maxlength": 50,
      "minlength": 8,
      "pattern": "^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*()]).{8,50}$"
    }
  ],
  "form_buttons": [
    {
      "name": "Войти",
      "type": "submit"
    }
  ]
}



function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <div className='App'>
      <FileUploader onFileLoad={setFormData} />
      <DynamicForm formData={formData} />
    </div>
  );
}

export default App;
