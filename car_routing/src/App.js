import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Product from './product';
import ProductDetail from './productDetail';
import {Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
class App extends Component {
  render() {
    return (
      <div className="App container">
        <Router>
			<div>
				<div className="container">
					<ul className="nav navbar-nav">
						{/* Change from a to Link */}
						<li><NavLink to="/" exact activeClassName= 'active' >App</NavLink></li>
						<li><NavLink to="/home" activeClassName= 'active' >Home</NavLink></li>
						<li><NavLink to="/product"  activeClassName= 'active' >Product</NavLink></li>
						<li><NavLink to="/Contact"  activeClassName= 'active' >Contact</NavLink></li>
					</ul>
				</div>
				<div className="container col-sm-12">
					<Route createHistory={createHistory}>
						<Switch>
							<Route exact path="/"/>
							<Route path="/home" component={Home} />
							<Route path="/product" exact component={Product} />
							<Route path={"/productdetail/:id"} component={ProductDetail} />
							<Route path="/Contact" component={Contact} />
						</Switch>
					</Route>
				</div>
			</div>
        </Router>
		<div className="container">
			{this.props.children}
		</div>
      </div>
    );
  }
}

export default App;
