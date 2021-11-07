import './App.css';
import Login from '../src/component/Login'
import Register from './component/Register';
import { Routes, Route } from "react-router-dom";
import { Home } from './component/Home';
import Dashboard from './component/Dashboard';

function App() {
  return (
  <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
  </>
  );
}

export default App;
