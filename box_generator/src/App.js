import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxGenerator from './components/BoxGenerator';
import DisplayColor from './components/DisplayColor';
import { useState } from 'react';

function App() {
  // BOX GENERATOR
  const [colors, setColors] = useState([])

  // CREATE FUNC THAT ADDS COLOR
  const addColor = (newColor) => {
    setColors([
      ...colors,
      newColor
    ])
  }


  return (
    <div className="App">
      <BoxGenerator addColor={addColor}/>
      <DisplayColor allColors={colors}/>
    </div>
  );
}

export default App;
