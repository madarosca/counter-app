import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
	return (
		<Fragment>
			<nav
				className='navbar navbar-expand-lg navbar-light'
				style={{ backgroundColor: '#e3f2fd' }}
			>
				<div
					className='collapse navbar-collapse justify-content-end'
					id='navigation-bar'
				>
					<div className='navbar-nav'>
						<a
							className='nav-link'
							href='/profiles'
						>
							Profiles app
						</a>
						<a
							className='nav-link'
							href='/counters'
						>
							Counters app
						</a>
					</div>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
