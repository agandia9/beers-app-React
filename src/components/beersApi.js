import axios from 'axios'

const BeersApi =  {
	baseUrl: 'https://quiet-inlet-67115.herokuapp.com/api',

	searchBeers: function (query) {
		return axios.get(this.baseUrl + '/search/all?q=' + query)
			.then(({data}) => { return data})
	},

	getBeer: function (id, callback) {
		return axios.get(this.baseUrl + '/beer/' + id)
	}
}

export default BeersApi

