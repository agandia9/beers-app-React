import React, { Component } from 'react'

class BeersList extends  Component {
		constructor() {
		super()
	}
	render(){
		return(<ul>
					{
						this.props.beers.map((beer, index)=> {
							return <li key={index}><a onClick={this.props.getBeer} data-id={beer.id}>{beer.name} </a></li>
						})
					}
				</ul>)
		}
	}



export default BeersList