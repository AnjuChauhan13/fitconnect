
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from './components/CreatePost'


function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />
        <Route path ="/createpost"   element={<CreatePost/>}/>




    </Routes>
    </BrowserRouter>
   
  );
}


export default App
