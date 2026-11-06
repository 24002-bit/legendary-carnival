import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dudas from './pages/Dudas';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Titulo from './pages/Titulo';
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Dudas' element={<Dudas/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Productos' element={<Productos/>}></Route>
      <Route path='/Titulo' element={<Titulo/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
