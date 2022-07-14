import './App.css';
import People from './pages/People'
import Planet from './pages/Planets'
import {Routes,Route} from "react-router-dom";
import StarWarForm from './components/StarWarForm';

function App() {
  return (
    <div className="App">
      <StarWarForm />
      <Routes>
        <Route path="/people/:people_id" element={<People />} />
        <Route path="/planets/:planet_id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
