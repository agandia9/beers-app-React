import React, { Component } from 'react'
import beersApi from './components/beersApi'

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
        beersApi.searchBeers(this.state.query)
            .then(res => {
                res.forEach((beer)=>{
                    console.log(beer)
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
        beersApi.getBeer(event.target.getAttribute('data-id'))
            .then(res => {
                this.setState({
                    beer: res.data
                })
            })
    }

    render() {
        return (<div className="jumbotron container">
            <h1>Search Beers info <span role="img" aria-label="Close">🍺</span></h1>
                    <input type="text" onChange={this.onQueryInput} value={this.state.query}/>
                    <button onClick={this.searchBeers}>Search Beers</button>
                     <ul>
                        {
                            this.state.beers.map((beer, index)=> {
                                return <li key={index}><a onClick={this.getBeer} data-id={beer.id}>{beer.name} </a></li>
                            })
                        }
                    </ul>
                    <p>
                        {this.state.beer.description}
                    </p>
                </div>)
    }
}


 

export default App