import React from 'react';

class ListItem extends React.Component{
	constructor(){
		super();
		this.state = {
			value : false
		}
	}
	clickEvent(){
		var property = this.state.value;
		this.setState({value:!property})
		var value = this.props.list.price;
		this.props.grandTotal(value, !property);
	}
	render(){
		return(
			<div className={this.state.value ? "selected" : null} onClick={this.clickEvent.bind(this)}>{this.props.list.item} : Rs.{this.props.list.price}</div>
		)
	}
}


export default ListItem