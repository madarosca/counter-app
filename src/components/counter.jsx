import React, { useContext } from 'react';
import { CountersContext } from '../contexts/counters.context';

const Counter = ({ counter }) => {
	const { incrementCounter, decrementCounter, deleteCounter } = useContext(CountersContext);

	const formatValue = () => (counter.value === 0 ? 'Zero' : counter.value);

	const getBadgeClasses = () => {
		let classes = 'badge m-2 badge-';
		classes += counter.value === 0 ? 'warning' : 'primary';

		return classes;
	};

	const incrementHandler = () => incrementCounter(counter);
	const decrementHandler = () => decrementCounter(counter);
	const deleteHandler = () => deleteCounter(counter.id);

	return (
		<div className='row'>
			<div className='col-1'>
				<span className={getBadgeClasses()}>{formatValue()}</span>
			</div>
			<div className='col'>
				<button
					onClick={incrementHandler}
					className='btn btn-secondary btn-sm'
				>
					+
				</button>
				<button
					onClick={decrementHandler}
					className='btn btn-secondary btn-sm m-2'
					disabled={counter.value === 0}
				>
					-
				</button>
				<button
					onClick={deleteHandler}
					className='btn btn-danger btn-sm'
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Counter;
