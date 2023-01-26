import { useContext } from 'react';
import { CountersContext } from '../../contexts/counters.context';

const Header = () => {
	const { countersTotal, countersSum, countersNumber, setCountersNumberInput, generateCounters, resetAllCounters } =
		useContext(CountersContext);

	const setCountersNumberHandler = ({ target }) => setCountersNumberInput(target.value);

	const generateCountersHandler = () => generateCounters();

	const resetAllCountersHandler = () => resetAllCounters();

	return (
		<div className='header d-flex justify-content-between align-items-center flex-wrap'>
			<div>
				Total counters: &nbsp;
				<span className='badge badge-pill badge-secondary'>{countersTotal}</span>
			</div>
			<div>
				Sum of counters: &nbsp;
				<span className='badge badge-pill badge-dark'>{countersSum}</span>
			</div>
			<input
				className='col-3 m-2'
				id='randomCounter'
				type='number'
				placeholder='Generate up to 20 rows'
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
		</div>
	);
};

export default Header;
