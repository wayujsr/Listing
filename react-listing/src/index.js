import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './contactslist';

let contacts = [{
	id : 1,
	name : "Tim",
	phone : '333 444 5555'
}, {
	id : 2,
	name : "Herry",
	phone : '333 444 666'
}, {
	id : 3,
	name : "Potter",
	phone : '111 444 5555'
}, {
	id : 4,
	name : "Ricky",
	phone : '333 222 5555'
}];

ReactDOM.render(<ContactsList contacts={contacts} />, document.getElementById('root'));
