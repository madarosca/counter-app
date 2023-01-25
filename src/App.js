import React, { Fragment, useContext } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<main
				role='main'
				className='container'
			>
				<Counters />
			</main>
		</Fragment>
	);
};

export default App;
