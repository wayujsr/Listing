import React from 'react';
import ListItem from './listitem'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        totalSum : 0
    }
  }
  grandTotal(value,property){
    //console.log("inside grandTotal");
    //console.log(value +" property"+ property);
    //console.log(this)
    var total = this.state.totalSum;
    if(property){
      total = total + value;
    }else{
      total = total - value;
    }
    this.setState({totalSum : total});
  }
  listing(values){
    var tempNamespace = {};
    console.log(values)
    var list = eval("this.props."+values);
    //var list = this.props.+""+values;
    console.log(list)
    var fullList = list.map((item, index) =>
      <ListItem key={index} index={index} list={item} grandTotal={this.grandTotal.bind(this)} />
    );
    return fullList;
  }
  /*beverageListing(){
    var beverageList = this.props.beveragePrice;
    var beverageFullList = beverageList.map((item, index) =>
      <ListItem key={index} index={index} list={item} grandTotal={this.grandTotal.bind(this)} />
    );
    return beverageFullList;
  }*/
  render() {
    let foodPrice="foodPrice";
    let beveragePrice="beveragePrice"
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="List">
          <div className="heading">Food Price</div>
          {this.listing(foodPrice)}
          <div className="heading">Beverage Price</div>
          {this.listing(beveragePrice)}
          
        </div>
        <div className="total">Grand Total : Rs.{this.state.totalSum} </div>
      </div>
    );
  }
}

export default App;
