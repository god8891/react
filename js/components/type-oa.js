import React, {Component, PropTypes} from 'react';

/**
 * 返回一个图片片段
 * @param  {[string]} options.val [图片绝地地址]
 * @return {[type]}             [description]
 */
const Img = ({val})=>(
	<div className={tool.classnames(['img',{hide : !val}])}>
		<img src={appConfig.getImgUrl + val} alt="" />
	</div>
);

/**
 * 返回描述文本片段
 * @param  {[string]} options.val [文本]
 * @return {[type]}             [description]
 */
const Summary = ({val})=>(
	<p className={tool.classnames(['summary',{hide : !val}])}>{val}</p>
);

/**
 * 返回展示一个列表片段
 * @param  {[array]} {val}) [一个文字列表数组]
 * @return {[type]}          [description]
 */
const List =  ({val})=>(
	<ul className={tool.classnames(['list',{hide : !val.length}])}>
		{
			val.map((item,index)=>{
				return <li><strong>{item.key}：</strong>{item.value}</li>
			})
		}
	</ul>
);

/**
 * 返回一行文字片段
 * @param  {[string]} options.val [富文本]
 * @return {[type]}             [description]
 */
const Rich = ({val})=>(
	<p className={tool.classnames(['state state-yes',{hide : !val.length}])}>{val}</p>
);

/**
 * 返回一个作者片段
 * @param  {[string]} options.val [名字]
 * @return {[type]}             [description]
 */
const Aauthor = ({val})=>(
	<p className={tool.classnames(['author',{hide : !val.length}])}>
		<strong>{val}</strong>
	</p>
);


/**
 * 应用消息类型
 */
export default class Oa extends Component {
	render(){

		let {msg={}} = this.props.data;

		let {dt} = msg;
		dt=dt[0].oa;

		let headTitle = dt.head.text || '';
		let title = dt.body.title || ''; // 标题
		let img   = dt.body.image || ''; // 图片
		let summary = dt.body.content || '';//
		let url = dt.message_url || ''; // PC端点击跳转地址 message_url pc_message_url

		let author = dt.body.author || '';    // 完成人
		let rich = dt.body.rich.text || '';   //富文本
		let overTime = dt.body.timestamp || '';  // 完成时间
		let form = [];
		if(dt.body.form){
			form = dt.body.form.slice(0,6);
		}
		return (
			<div className="msg-list-body-project">
				<strong className="message-project-header">{headTitle}</strong>
				<div className="message-project-content">
					<strong className="title">{title}</strong>
					<Img val={img}/>
					<Summary val={summary} />
					<List val={form} />
					<Rich val={rich} />
					<Aauthor val={author} />
				</div>
				<div className="message-project-footer">
					<a href={url} className="openView" onClick={this._openUrl} name={headTitle} >查看详情 ></a>
				</div>
			</div>
		)
	}
}