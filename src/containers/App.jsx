import {Component} from 'React';


//一个博客系统，分为前端文字展示，和后台管理功能，故路由最外层分2层

export default class App extends Component{
	render() {
		return (
			<div className="App">
				{this.props.children?React.cloneElement(this.props.children, this.state):''}
			</div>
		)
	}
}