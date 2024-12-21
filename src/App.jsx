import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tabela from './componentes/Tabela'
import Formulario from './componentes/Formulario'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tabela/>}/>
        <Route path='/form/:id?' element={<Formulario/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
