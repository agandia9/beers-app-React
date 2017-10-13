import React, { Component } from 'react'
import BeersApi from './components/BeersApi'
import BeersList from './components/BeersList'
import BeerInfo from './components/BeerInfo'
class App extends Component {
	constructor() {
		super()
		this.state = {
			beer: '',
			query: '',
			beers: []
		}
	}

	onQueryInput = (event) =>{
		this.setState({
			beers: [],
			query: event.target.value
		})
	}

	searchBeers = () => {
		BeersApi.searchBeers(this.state.query)
			.then(res => {
				res.forEach((beer)=> {
					let beerObj = {
						name: beer.name,
						id: beer.id
					}
					this.setState({
						beers: this.state.beers.concat(beerObj),
						query: ''
					})
				})
			})
			.catch(function (err) {
				console.error(err)
			})
	}

	getBeer = (event) =>{
		BeersApi.getBeer(event.target.getAttribute('data-id'))
			.then(res => {
				this.setState({
					beer: res.data
				})
			})
	}

	render() {
		return (<div className="jumbotron container">
			<h1>Search Beers Info <span role="img" aria-label="Close">🍺</span></h1>
					<input type="text" onChange={this.onQueryInput} value={this.state.query}/>
					<button onClick={this.searchBeers} className='btn btn-default' >Search Beers</button>
					<BeersList 
						beers={this.state.beers}
						getBeer={this.getBeer}
						/>
					<BeerInfo
						beerInfo={this.state.beer}
					/>
				</div>)
	}
}

export default App