import React, { Fragment, useContext } from 'react';
import { CountersContext } from '../../contexts/counters.context';
import Counter from './counter';
import Header from './header';
import './counters.scss';

const Counters = () => {
	const { counters } = useContext(CountersContext);

	return (
		<Fragment>
			<div className='counters-container'>
				<Header />
				<div className='col-md-6 mx-auto '>
					{counters.map((counter) => (
						<Counter
							key={counter.id}
							counter={counter}
						/>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default Counters;
