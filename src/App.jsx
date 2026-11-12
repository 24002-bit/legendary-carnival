import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dudas from './pages/Dudas';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Titulo from './pages/Titulo';
import Header from './components/Header'
import Login from './pages/Login'
import Registro from './pages/Registro'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Dudas' element={<Dudas/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Productos' element={<Productos/>}></Route>
      <Route path='/Titulo' element={<Titulo/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Registro' element={<Registro/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
