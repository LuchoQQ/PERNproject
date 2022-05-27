import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './Login';
import { useLoggedContext } from './context/Context';

function App() {
  
  const isLogged = useLoggedContext();
  
  return (
    <>
      <Routes>
        <Route path="/" element={isLogged ? <HomePage /> : <Login />} />  
      </Routes> 
      
    </>
  );
}

export default App;
