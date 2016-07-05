/**
 * 一个弹出框组件
 */
import React, {Component, PropTypes} from 'react';

export class Alert extends Component {
	render() {
		return (
			<div className="inform-alert-wrap">
				<div className="inform-alert">
					<div className="inform-alert-header">
						<strong className="inform-alert-title">这里是标题</strong>
					</div>
					<div className="inform-alert-body">
						这里是文本信息
					</div>
					<div className="inform-alert-footer">
						<span>确定</span>
					</div>
				</div>
				<div className="inform-mask"></div>
			</div>
		)
	}
}





export class Inform extends Component {
	render(){
		return (
			<div>
				<span>野生程序员</span>
				<summary>非专业出身程序员</summary>
			</div>
		)
	}
}