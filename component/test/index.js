import React, { Component } from 'react';
import './index.scss';
import html2canvas from 'html2canvas';

class Test extends Component {
	constructor(props){
		super(props);
		this.state = {
			msg:"Hello World"
		}
	}	
	componentDidMount(){
		var _this = this;
		html2canvas(document.body).then(function(canvas) {
			var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url 　			
        　　_this.refs.canvas.src = imgUri;
        	_this.refs.downImg.href = imgUri;        	
		});
		$(_this.refs.canvas).on('longTap',function(){
		    console.log('longPress');
		});
	}
	_save(e){
		$(this.refs.canvas).trigger('longTap');
	}
	render(){
		return (
			<div className="test">
				<div className="test-title">{this.state.msg}</div>
				<a ref="downImg" className="downImg" href="" download="downImg.jpeg" onClick={this._save.bind(this)}>pc截图下载，手机端长按下面图片保存</a>
				<img className="test-canvas" ref="canvas"/>
			</div>
		)
	}
}

export default Test;