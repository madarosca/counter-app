import { Outlet } from 'react-router-dom';
import Counters from '../counter/counters';
import Profiles from '../profiles/profiles';

const Home = () => {
	return (
		<div>
			<Counters />
			<Outlet />
		</div>
	);
};

export default Home;
