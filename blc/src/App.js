import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Section from './Components/Section';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Section />
			<Footer />

			<Routes>
				<Route path="/"></Route>
				<Route path="/menu" element={<Menu/>}></Route>
			</Routes>
		</>
	);
}

export default App;
