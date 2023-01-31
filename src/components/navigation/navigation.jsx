import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../assets/logo.svg';
import './navigation.scss';

const Navigation = () => {
	return (
		<Fragment>
			<nav
				className='navbar navbar-expand-lg navbar-light'
				style={{ backgroundColor: '#e3f2fd' }}
			>
				<Link
					className='navbar-brand'
					to='/'
				>
					<AppLogo className='logo' />
				</Link>
				<div
					className='collapse navbar-collapse justify-content-end'
					id='navigation-bar'
				>
					<div className='navbar-nav'>
						<a
							className='nav-link'
							href='/counters'
						>
							Counters app
						</a>
						<a
							className='nav-link'
							href='/profiles'
						>
							Profiles app
						</a>
					</div>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
