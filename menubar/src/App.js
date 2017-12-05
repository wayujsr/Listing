import React from 'react';
import List from './list';
import {Motion, spring} from 'react-motion';
import ReactExpandableListView from 'react-accordion-components';
class App extends React.Component {
  static get menuItems() {
    return [
      {
        headerName: 'Products',
        isOpened: false,
        height: 100,
        isReactComponent: true,
        items: [
          (
          <a
            to="admin/products/all"
            className="btn btn-default"
            activeClassName="active"
          >
            All
          </a>
          ),
          (
          <a
            to="admin/products/expired"
            className="btn btn-default"
            activeClassName="active"
          >
            Expired
          </a>
          ),
          (
          <a
            to="admin/products/submitted"
            className="btn btn-default"
            activeClassName="active"
          >
            Submitted
          </a>
          ),
        ],
      },
      {
        headerName: 'Promotions',
        isOpened: false,
        height: 100,
        isReactComponent: true,
        items: [
          (
          <a
            to="admin/promotions/active"
            className="btn btn-default"
            activeClassName="active"
          >
            Active
          </a>
          ),
       ],
      },
      {
        headerName: 'Settings',
        isOpened: false,
        height: 100,
        isReactComponent: true,
        items: [
          (
          <a
            to="admin/settings/all"
            className="btn btn-default"
            activeClassName="active"
          >
            Al
          </a>
          ),
        ],
      },
    ];
  }


  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }
  clickHandler(index) {
    this.setState({ active: index })
    this.listing();
  }

  listing() {
    let menu = this.props.menu;
    var content = menu.map((menu, index) =>
      <List clickHandler={this.clickHandler.bind(this, index)} index={index} key={index} menu={menu} style={this.state.active} />
    )
    return content;
  }
  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
        <ul>
          {this.listing(this)}
        </ul>
        <ReactExpandableListView
        data={this.constructor.menuItems}
        headerAttName="headerName"
        itemsAttName="items"
      />
      </div>
    );
  }
}

export default App;
