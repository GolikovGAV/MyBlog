import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './services/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter basename='/MyBlog'>
			<App />
		</BrowserRouter>
	</Provider>
);
