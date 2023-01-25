import { createContext, useEffect, useState } from 'react';
import { DEFAULT_RANDOM_COUNTERS } from '../constants/constants';

const resetCounters = (counters) => counters.map((counter) => ({ ...counter, value: 0 }));

const deleteCounterItem = (counters, counterId) => counters.filter((counter) => counter.id !== counterId);

const incrementCounterItem = (counters, counter) =>
	counters.map((item) => (counter.id === item.id ? { ...item, value: (counter.value += 1) } : item));

const decrementCounterItem = (counters, counter) =>
	counters.map((item) => (counter.id === item.id ? { ...item, value: (counter.value -= 1) } : item));

export const CountersContext = createContext({
	counters: [],
	countersTotal: 0,
	countersSum: 0,
	countersNumber: '',
	generateCounters: () => {},
	resetAllCounters: () => {},
	deleteCounter: () => {},
	incrementCounter: () => {},
	decrementCounter: () => {},
});

export const CountersProvider = ({ children }) => {
	const [counters, setCounters] = useState([]);
	const [countersTotal, setCountersTotal] = useState(DEFAULT_RANDOM_COUNTERS);
	const [countersSum, setCountersSum] = useState(0);
	const [countersNumber, setCountersNumber] = useState('');

	const generateCounters = () => {
		const num = !!countersNumber ? parseInt(countersNumber) : DEFAULT_RANDOM_COUNTERS;
		let counters = [];

		if (num > 15) setCountersNumber(15);

		for (let i = 1; i <= num; i++) {
			counters.push({ id: i, value: Math.floor(Math.random() * i) });
		}

		setCounters(counters);
	};

	const setCountersNumberInput = (countersNumber) => {
		setCountersNumber(countersNumber);
	};

	const resetAllCounters = () => {
		setCounters(resetCounters(counters));
	};

	const deleteCounter = (counterId) => {
		setCounters(deleteCounterItem(counters, counterId));
	};

	const incrementCounter = (counter) => {
		setCounters(incrementCounterItem(counters, counter));
	};

	const decrementCounter = (counter) => {
		setCounters(decrementCounterItem(counters, counter));
	};

	useEffect(() => {
		generateCounters(countersTotal);
	}, []);

	useEffect(() => {
		generateCounters(countersNumber);
	}, [countersNumber]);

	useEffect(() => {
		setCountersTotal(counters.length);
	}, [counters]);

	useEffect(() => {
		const countersSum = counters.reduce((total, { value }) => total + value, 0);
		setCountersSum(countersSum);
	}, [counters]);

	const value = {
		counters,
		countersTotal,
		countersSum,
		countersNumber,
		setCountersNumberInput,
		generateCounters,
		resetAllCounters,
		deleteCounter,
		incrementCounter,
		decrementCounter,
	};

	return <CountersContext.Provider value={value}>{children}</CountersContext.Provider>;
};
