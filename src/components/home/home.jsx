import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<Fragment>
			<div className='text-center'>
				<h4>There are two demos on this project. Choose the one you would like too see: </h4>
				<Link
					to='counters'
					className='lead text-info text-uppercase px-5'
				>
					Counters app
				</Link>
				<Link
					to='profiles'
					className='lead text-info text-uppercase px-5'
				>
					Profiles app
				</Link>
			</div>

			<Outlet />
		</Fragment>
	);
};

export default Home;
