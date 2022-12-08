import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Section from './Components/Section';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
	return (
		<div>
			<Navbar />
			{/* Put components that will change in here */}
			<Routes>
				<Route path='/' element={<Section />} />
				<Route path='/menu' element={<Menu />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
