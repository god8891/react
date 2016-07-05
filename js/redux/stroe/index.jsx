import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const composedCreateStore = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configreStore(initialState = {}) {
	const store = composedCreateStore(reducers, initialState);
	return store;
}