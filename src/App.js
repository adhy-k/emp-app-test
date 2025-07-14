import logo from './logo.svg';
import './App.css';
import Viewemp from './components/Viewemp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Viewemp/>} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
