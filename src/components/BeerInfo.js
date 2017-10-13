import React, { Component }from 'react'

class BeerInfo extends Component{
	constructor() {
		super()
	}

	render(){
		let labelIcon = this.props.beerInfo.labels ? this.props.beerInfo.labels.medium : 'http://via.placeholder.com/150x150'
		return<div className='row infoBeer'>
		<div className=' col-xs-8 col-sm-8 col-md-8'>
			<h2>{this.props.beerInfo.name}</h2>
			<h3>{this.props.beerInfo.abv}</h3>
				<p>
					{this.props.beerInfo.description || 'No info'}
				</p>
			</div>
			<div className=' col-xs-3 col-sm-3 col-md-3' >
				<img src={labelIcon} alt=""/>
			</div>
		</div>
	}
}

export default BeerInfo