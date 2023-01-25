import React, { Fragment, useContext } from 'react';
import { CountersContext } from '../contexts/counters.context';
import Counter from './counter';

const Counters = () => {
	const { counters, countersNumber, setCountersNumberInput, generateCounters, resetAllCounters } =
		useContext(CountersContext);

	const setCountersNumberHandler = ({ target }) => setCountersNumberInput(target.value);

	const generateCountersHandler = () => generateCounters();

	const resetAllCountersHandler = () => resetAllCounters();

	return (
		<div>
			<input
				id='randomCounter'
				type='number'
				placeholder='Generate up to 15 rows'
				value={countersNumber}
				onChange={setCountersNumberHandler}
			/>
			<button
				onClick={generateCountersHandler}
				className='btn btn-primary btn-sm m-2'
			>
				Generate random counters
			</button>
			<button
				onClick={resetAllCountersHandler}
				className='btn btn-info btn-sm m-2'
			>
				Reset all to 0
			</button>
			{counters.map((counter) => (
				<Counter
					key={counter.id}
					counter={counter}
				/>
			))}
		</div>
	);
};

export default Counters;
