import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { CountersProvider } from './contexts/counters.context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CountersProvider>
				<App />
			</CountersProvider>
		</BrowserRouter>
	</React.StrictMode>
);

registerServiceWorker();
