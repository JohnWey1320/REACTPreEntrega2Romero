import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito  from './components/CartWidget/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer/itemdetailcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
<>    

<BrowserRouter>
<NavBar />
<Routes>
  <Route path='/' element={<ItemListContainer />} /> 
  <Route path='/lista/:listaid' element={<ItemListContainer />} /> 
  <Route path='/carrito' element={<Carrito />} /> 
  <Route path='/detalle/:detalleid' element={<ItemDetailContainer />} />  
</Routes>

</BrowserRouter>

</>

  );
}

export default App;
