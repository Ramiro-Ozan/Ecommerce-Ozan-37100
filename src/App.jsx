import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route index path='/' element = { <ItemListContainer /> } />
          <Route path='/detail/:detalledId' element = { <ItemDetailContainer /> } />
          
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;