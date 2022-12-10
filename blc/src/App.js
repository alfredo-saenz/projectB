import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Section from './Components/Section';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Gallery from './Components/Gallery';
function App() {
	return (
		<Router>
			<div>
				<Navbar />
				{/* Put components that will change in here */}
				<Routes>
					<Route path='/' element={<Section />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/gallery' element={<Gallery />} />
				</Routes>
				<ScrollToTop />
				<Footer />
			</div>
		</Router>
			
	);
}

export default App;
