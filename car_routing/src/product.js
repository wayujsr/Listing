import React from 'react';
import {NavLink} from 'react-router-dom';

class Product extends React.Component{
	constructor(){
		super();
		this.state = {'result':[],
			searchByName: "",
			searchByYear: "",
			optionValue: "active",
			searchByActive: "",
			sort: "",
			firstLoad : true,
			searchByDeActive: ""
		};
	}
	componentDidMount() {   
		fetch('https://wayujsr.github.io/carPanel/data.json')
		.then((response) =>
			response.json()
		  )
		  .then((data) => {
			console.log("fetch")
			this.setState({'result': data});
		  });
  		if(this.state.optionValue === "active"){
			this.setState({searchByActive: true})
		}else if (this.state.optionValue === "deactive"){
			this.setState({searchByActive: false})
		}else{
			this.setState({searchByActive: ""})
		}

	}
	clickHandler(data){
		console.log(data);
	}
	filter(event){
		console.log(this.state)

		if(this.state.firstLoad === true){
			var oldData = this.state.result;
			this.setState({oldList: oldData, firstLoad: false})
		}
		if(event.target.id === "sort"){
			var state;
			if(event.target.value === "A-Z"){
				state = this.state.result.sort(function(a, b){
				    if(a.name < b.name) return -1;
				    if(a.name > b.name) return 1;
				    return 0;
				})
				this.setState({result: state})
			}else if (event.target.value === "Z-A"){
				state = this.state.result.sort(function(a, b){
				    if(a.name < b.name) return 1;
				    if(a.name > b.name) return -1;
				    return 0;
				})
				this.setState({result: state})
			}else{
				state = this.state.result.sort(function(a, b){
					if(a.id < b.id) return -1;
				    if(a.id > b.id) return 1;
				    return 0;
				})
				this.setState({result: state})
			}
		}
		if(event.target.id === "active"){
			this.setState({optionValue:event.target.value})
			if(event.target.value === "active"){
				this.setState({searchByActive: true})
			}else if (event.target.value === "deactive"){
				this.setState({searchByActive: false})
			}else{
				this.setState({searchByActive: ""})
			}
			
		}	
		
		else{

		}
		if(event.target.id === "name"){
			this.setState({searchByName:event.target.value});
		}else if(event.target.id === "year"){
			this.setState({searchByYear:event.target.value});
		}
	}
    render(){
    	var sortOrder = this.state.result;

    	var activeList = sortOrder.filter((data,i) =>
    		data.active.toLowerCase().startsWith(this.state.searchByActive)
		);

		var sortedList = activeList.filter((data,i) =>
			data.name.toLowerCase().startsWith(this.state.searchByName.toLowerCase())
		);
		
		var sortedYear = sortedList.filter((data,i) =>
			data.year.toLowerCase().startsWith(this.state.searchByYear)
		);
		
		
		var list = sortedYear.map((data, i) => 
		
			<li key={i}>
				<NavLink to={"/productdetail/"+data.id} onClick={this.clickHandler.bind(this)} className={data.active === "true"?" " : "disabled"} activeClassName= 'active'>{data.name}</NavLink>
			</li>
			
		);
		
        return(
            <div className="container">
            	<div>
            		<select id="active" value={this.state.optionValue} onChange={this.filter.bind(this)}>
            			<option>none</option>
            			<option>active</option>
            			<option>deactive</option>
            		</select>

            		<select id="sort" onChange={this.filter.bind(this)}>
            			<option>none</option>
            			<option>A-Z</option>
            			<option>Z-A</option>
            		</select>

            	</div>
				<div className="input-group input-group-md col-lg-6">
					<input type="text" id="name" onChange={this.filter.bind(this)}  className="form-control" placeholder="Search with product name" aria-describedby="sizing-addon1" />
				</div>
				<br />
				<div className="input-group input-group-md col-lg-6">
					<input type="text" id="year" onChange={this.filter.bind(this)}  className="form-control" placeholder="Search with manufactur year" aria-describedby="sizing-addon1" />
				</div> 
				
				
				<ul>
					{list}
				</ul>
				<div className="container">
					{this.props.children}
				</div>
            </div>
        )
    }
}

export default Product;