import { Route, Routes } from 'react-router-dom';
import Counters from './components/counter/counters';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import Profiles from './components/profiles/profiles';
import './App.css';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigation />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='counters'
					element={<Counters />}
				/>
				<Route
					path='profiles'
					element={<Profiles />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
