import React, { useState } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';
import Checkbox from './components/ui/Checkbox/Checkbox';
import FileUploader from './components/ui/Files/Files';
import Input from './components/ui/Input/Input';
import Select from './components/ui/Select/Select';
// import ColorField from './components/ui/Color/Color';
import Color from './components/ui/Color/Color';
function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleTypeChange = (value: string | string[]) => {
    setSelectedType(Array.isArray(value) ? value.join(', ') : value);
  };
  const handleColorChange = (color: string) => {
    console.log('Выбран цвет:', color);
    // Здесь можно сохранить выбранный цвет в состоянии компонента или отправить на сервер и т.д.
  };

  const options = [
    { value: 'usa', label: 'USA' },
    { value: 'russia', label: 'Russia' },
    { value: 'germany', label: 'Germany' }
  ];
  return (
    <div className='App'>
      <Button label='Reset' onClick={() => { alert('Reset clicked') }} variant='primary' />
      <Button label='Нажми' onClick={() => { alert('Нажми clicked') }} variant='secondary' />

      <Checkbox
        label="Check me"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <FileUploader />

      <Input placeholder='Введите свое имя' variant='default' onChange={handleInputChange} value={inputValue} />
      <Input placeholder='Введите свое имя' variant='error' onChange={handleInputChange} value={inputValue} />

      <Select options={options}
      // onChange={handleTypeChange}
      // name="type"
      // id="typeSelect"
      // required={true}
      // multiple={false}
      />
      <Color />

    </div>
  );
}

export default App;
