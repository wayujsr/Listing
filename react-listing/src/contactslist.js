import React, { Component } from 'react';
import Contact from './contact';

class ContactsList extends Component {
	constructor(props){
		super(props)
		this.state = {
			search : "",
			contacts : props.contacts
		}
		console.log(this.state.contacts)
	}
	updateSearch(event){
		this.setState({search: event.target.value.substr(0,10)});
	}
	addContact(event){
		event.preventDefault();
		console.log(this);
		let name = this.refs.name.value;
		let phone = this.refs.phone.value;
		let id = this.state.contacts.length + 1;
		console.log(id);
		this.setState({
			contacts: this.state.contacts.concat({id, name, phone})
		});
		this.refs.name.value = '';
		this.refs.phone.value = '';
	}
	render() {
	console.log(this.props.contacts);
	let filteredContacts = this.state.contacts.filter((contact) =>{
		return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
	});
	
    return (
		<div className="App">
			<h1>Contact List</h1>
			<input type="text" 
				placeholder="Search"
				value={this.state.search}
				onChange={this.updateSearch.bind(this)}
			/>
			<h1>Add New Feild</h1>
			<form onSubmit={this.addContact.bind(this)}>
				<input type="text" ref="name" placeholder="Name" />
				<input type="text" ref="phone" placeholder="Phone" />
				<button type="Sumbit" value="Add New Feild">Add New Feild</button>
			</form>
			<ul>
				{filteredContacts.map((contact) =>{
					return  <Contact contact={contact} key={contact.id} />
				})}
			</ul>
		</div>
    );
  }
}

export default ContactsList;
