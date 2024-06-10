import logo from './logo.svg';
import './App.css';
import SingIn from './component/SingIn';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/login' element={<Login/>}/>
    <Route path='/singin' element={<SingIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
