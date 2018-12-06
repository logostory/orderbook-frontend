import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import * as actions from './actions';
import reducers from './reducers';


const logger = createLogger();

const store = createStore(reducers, applyMiddleware(logger, ReduxThunk));
// console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200, 200, 200]));

export default store;
