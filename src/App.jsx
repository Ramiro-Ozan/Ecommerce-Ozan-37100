import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/itemCount';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        greetings={"Hi, I'm the list container"} />
      <ItemCount/>
    </>
  );
}

export default App;