import React from 'react';

class List extends React.Component{

	clickMe(index){
		this.props.clickHandler();
	}

	addClass(){
		//console.log(this)
		if(this.props.style === this.props.index){
			return "selected";
		}else{
			return " ";
		}

	}

	render(){
		//console.log("this props menu"+ this.props.menu);
		//console.log("this props index"+ this.props.index);
		//console.log("this props style"+ this.props.style);
		return (<li className={this.addClass(this)} onClick={this.clickMe.bind(this, this.props.index)}>{this.props.menu}</li>)
	}
}

export default List;