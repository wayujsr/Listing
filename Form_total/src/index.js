import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var foodPrice = [
					{item:"Item 1", price : 100},
					{item:"Item 2", price : 200},
					{item:"Item 3", price : 300}
				];
var beveragePrice = [
					{item:"Item 1", price : 100},
					{item:"Item 2", price : 200},
					{item:"Item 3", price : 300}
];

ReactDOM.render(<App foodPrice={foodPrice} beveragePrice={beveragePrice} />, document.getElementById('root'));
