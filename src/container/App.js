import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import { robots } from '../robots'
import SearchBox from '../components/SearchBox'


class App extends Component {

	constructor () {
		super()
		this.state = {
			robots: robots,
			searchfield: '',
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value});
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => { 
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
		})
			return (
					<div className='tc'>
						<div>
							<h1>Robo Friends</h1>
							<SearchBox searchChange={this.onSearchChange} />
						</div>
						<CardList robots = {filteredRobots} />
					</div>
			)
	}
};



// render(
// 	return 
		
// 	);

export default App;