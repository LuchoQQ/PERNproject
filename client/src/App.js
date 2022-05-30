import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { useLoggedContext } from './context/Context';
import Register from './pages/Register';
import AddMoney from './pages/AddMoney';
import Activity from './pages/Activity';
import AddCost from './pages/AddCost';

function App() {
  
  const isLogged = useLoggedContext();
  
  return (
    <>
      <Routes>
        <Route path="/" element={isLogged ? <HomePage /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addmoney" element={<AddMoney />} />
        <Route path='/spent' element={<AddCost />} />
        <Route path="/activity" element={<Activity />} />
      </Routes> 
      
    </>
  );
}

export default App;
