import './App.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import NavBar from './componets/NavBar/NavBar'
import ItemDetailContainer from './componets/ItemDetailContainer/itemDetailcontainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todas Las Categorias' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Categoria'}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
