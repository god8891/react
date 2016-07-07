let {Router, Route, IndexRoute} = ReactRouter;


import App from './containers/App';
import {Router, Route, IndexRoute} from 'reactRouter';


const routes = (
	<Router>
		<Route path="/" component={mainRouter}>
			<IndexRoute component={login} />
			<Route path="/login" component={login} />
			<Route path="/backstage" component={BackstageRouter}>
				<IndexRoute component={orders} />
				<Route path="/backstage/orders" component={orders} />
				<Route path="/backstage/finance" component={finance}>
					<IndexRoute component={financeInfo} />
					<Route path="/backstage/finance/price/:date" component={financePrice} />
					<Route path="/backstage/finance/spend/:date" component={financeSpend} />
					<Route path="/backstage/finance/summary/:date" component={financeSummary} />
				</Route>
				<Route path="/backstage/staff" component={staff} />
				<Route path="/backstage/compay" component={compay} />
				<Route path="/backstage/rechange" component={rechange} />
			</Route>
			
		</Route>
	</Router>
)

export default routes