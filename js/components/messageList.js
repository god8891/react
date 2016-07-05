import React, {Component, PropTypes} from 'react';

class ListHeader extends Component {
	render() {
		//应用消息列表头部
		return (
			<div className="msg-list-head">
				<strong className="msg-list-head-title">应用消息</strong>
			</div>
		)
	}
}


/*class Msg extends Component {
	render() {
		//详细消息内容
		//根据消息类型返回对应消息
		return (
			<div className="msg-list-body-item">


			</div>
		)
	}
}
*/

class OldList extends Component {
	render() {
		return (
			<div className="" >
				这里展示历史消息

			</div>
		)
	}
}

class NowList extends Component {
	render() {
		return (
			<div className="">
				这里展示最新消息
			</div>
		)
	}
}
class ListBody extends Component {
	render() {
		//应用消息列表
		
		const {load, oldList, nowList} = this.props;
		return (
			<div className="msg-list-body" >
				<OldList />
				<div className="" >
					<span>以上是历史消息</span>
				</div>
				<NowList />
			</div>
		)
	}
}



class MsgListBox extends Component {
	render() {
		console.log(this.props);
		//消息列表
		return (
			<div className="msg-lists">
				<ListHeader />
				<ListBody />
			</div>
		)
	}
}

export default MsgListBox;