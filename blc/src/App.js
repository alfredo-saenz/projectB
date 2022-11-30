import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Section from './Components/Section';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
  <Navbar/>
  <Section/>

  <Routes>
    <Route path='/' ></Route>
    <Route path='/menu' element={<Menu/>}></Route>
  </Routes>
    </>


  );
}


export default App;
