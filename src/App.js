import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else if (buttonValue === 'AC') {
      setValue('');
    } else if (buttonValue === 'DEL') {
      setValue(value.slice(0, -1));
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <>
      <div className="container">
       
        <div className="calculator">
       
          <form>
            <div className="display">
              <input type="text" value={value} readOnly />
            </div>
            <div>
              <input type="button" value="AC" onClick={handleButtonClick} />
              <input type="button" value="DEL" onClick={handleButtonClick} />
              <input type="button" value="." onClick={handleButtonClick} />
              <input type="button" value="/" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="7" onClick={handleButtonClick} />
              <input type="button" value="8" onClick={handleButtonClick} />
              <input type="button" value="9" onClick={handleButtonClick} />
              <input type="button" value="*" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="4" onClick={handleButtonClick} />
              <input type="button" value="5" onClick={handleButtonClick} />
              <input type="button" value="6" onClick={handleButtonClick} />
              <input type="button" value="+" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="1" onClick={handleButtonClick} />
              <input type="button" value="2" onClick={handleButtonClick} />
              <input type="button" value="3" onClick={handleButtonClick} />
              <input type="button" value="-" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="00" onClick={handleButtonClick} />
              <input type="button" value="0" onClick={handleButtonClick} />
              <input
                type="button"
                className="equal"
                value="="
                onClick={handleButtonClick}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
