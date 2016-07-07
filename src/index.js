import { Provider } from 'react-redux'
import Route  from './route';

import configreStore from './store';

let store = configreStore();
let rootElemnt = document.getElementById('app-main');

ReactDOM.render(
	<Provider store={store}>
		{Route}
	</Provider>,
	rootElemnt
);