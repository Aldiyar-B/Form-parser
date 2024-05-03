import React, { useState } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';
import Checkbox from './components/ui/Checkbox/Checkbox';
import FileUploader from './components/ui/Files/Files';
import Input from './components/ui/Input/Input';
function App() {

  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  };


  return (
    <div className='App'>

      <Button label='Reset' onClick={() => { alert('clicked') }} variant='primary' />


      <Button label='Нажми' onClick={() => { alert('clicked') }} variant='secondary' />


      <Checkbox
        label="Check me"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <FileUploader />

      <Input placeholder='Введите свое имя' variant='default' onChange={handleInputChange} value={inputValue} />
      <Input placeholder='Введите свое имя' variant='error' onChange={handleInputChange} value={inputValue} />
    </div>
  );
}

export default App;
