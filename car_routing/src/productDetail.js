import React from 'react';
import createHistory from 'history/createBrowserHistory'


class ProductDetail extends React.Component{
	constructor(){
		super()
		this.state = {'result':[{"id": "1",
        "name": "Honda Accord Crosstour",
        "year": "2010",
        "model": "Accord Crosstour",
        "make": "Honda",
        "active":"true",
        "media": "http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg",
        "price": "$16,811"}]
		};
	}
	componentDidMount() {   
		fetch('/data.json')
		.then((response) =>
			response.json()
		  )
		  .then((data) => {
			this.setState({'result': data});
		  });
	}
	listing(){
		console.log(this)
	}
    render(){
	console.log(this);
	var searchById = this.props.match.params.id;
	var filterList = this.state.result.filter(data => {
		return (data.id === searchById ? data : null);
	})
	console.log(filterList)
	
	var list = filterList.map((data,i) =>
		<div key={i} className="col-sm-6 col-md-4">
			<div className="thumbnail">
			  <img src={data.media} alt={data.name} />
			  <div className="caption">
				<h3>{data.name}</h3>
				<p>{data.price}</p>
				<p>{data.model}</p>
				<p>{data.year}</p>
				<p>{data.make}</p>
			  </div>
			</div>
		</div>
	)
	const history = createHistory();
	var gotoList = function(){
		console.log(history)
		history.push("/product");
		history.go("/product");
	}
		
	
	return(
		<div>
			<div class="row">
			  
			</div>
			<div className="container">
				{list}
				<div className="col-sm-12"><a onClick={gotoList} className="btn btn-primary" role="button">Go back to list</a></div>
			</div>
		</div>

        )
    }
}
export default ProductDetail;