/**
 * app入口
 */



import { Provider } from 'react-redux'
import Route  from './routes';

import configreStore from './store/index';

let store = configreStore();
let rootElemnt = document.getElementById('app-main');


ReactDOM.render(
	<Provider store={store}>
		{Route}
	</Provider>,
	rootElemnt
);