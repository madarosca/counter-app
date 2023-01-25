import React, { useContext } from 'react';
import { CountersContext } from '../contexts/counters.context';

const NavBar = () => {
	const { countersTotal, countersSum } = useContext(CountersContext);

	return (
		<nav className='navbar navbar-light bg-light'>
			<a
				className='navbar-brand'
				href='/'
			>
				Total counters: &nbsp;
				<span className='badge badge-pill badge-secondary'>{countersTotal}</span>
			</a>
			<a
				className='navbar-brand'
				href='/'
			>
				Sum of counters: &nbsp;
				<span className='badge badge-pill badge-dark'>{countersSum}</span>
			</a>
		</nav>
	);
};

export default NavBar;
