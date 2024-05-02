import React, { useState } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';
import Checkbox from './components/ui/Checkbox/Checkbox';
import FileUploader from './components/ui/Files/Files';
function App() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
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
    </div>
  );
}

export default App;
