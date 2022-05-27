import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { useLoggedContext } from './context/Context';
import Register from './pages/Register';

function App() {
  
  const isLogged = useLoggedContext();
  
  return (
    <>
      <Routes>
        <Route path="/" element={isLogged ? <HomePage /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> 
      
    </>
  );
}

export default App;
