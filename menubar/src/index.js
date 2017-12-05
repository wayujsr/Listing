import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let menu = ['Home','About Us','Contact Us', 'Learn React or Go Home'];

ReactDOM.render( <App menu={menu} />, document.getElementById('root'));
