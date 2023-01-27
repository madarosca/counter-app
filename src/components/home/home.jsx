import { Outlet } from 'react-router-dom';
import Counters from '../counter/counters';

const Home = () => {
	return (
		<div>
			<Counters />
			<Outlet />
		</div>
	);
};

export default Home;
