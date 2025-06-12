import { useState } from 'react';
import ColorBackgound from './ColorBackground';
import Square from './Square';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, sethexValue] = useState('')
  const [isDarkText, SetIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />

      <ColorBackgound
        colorValue={colorValue}
        setColorValue={setColorValue}
        sethexValue={sethexValue}
        isDarkText={isDarkText}
        SetIsDarkText={SetIsDarkText}
      />
    </div>
  );
}

export default App;
