import { createStore, combineReducers } from 'redux';
import * as modules from './modules';


const config = (() => {
	const reducers = combineReducers(modules);
	return (loadedState) => createStore(reducers, loadedState)
})();

export default config;