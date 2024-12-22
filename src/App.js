import logo from './logo.svg';
import './App.css';
import Login from './Loginpage/Login';
import Home from './Homepage/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='h-DVH w-full'>
      <div className='App'>
        <BrowserRouter>
         <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
           </Routes>
            </BrowserRouter>
            </div>
            
    </div>
  )
}

export default App;
