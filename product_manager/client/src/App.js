import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from './pages/Main';
import DetailProduct from './pages/DetailProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:product_id" element={<DetailProduct />} />
      </Routes>
    </div>
  );
}

export default App;
