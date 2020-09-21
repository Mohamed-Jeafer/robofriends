import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import Loading from '../components/Loading'
import ErrBoundry from '../components/ErrBoundry'
import './App.css'


class App extends Component {

	constructor () {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value});
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => { 
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
		})
		if (this.state.robots.length === 0) {
			return <Loading />
		} 	else {
				return (
						<div className='tc'>
							<div>
								<h1 className='f1'>Robo Friends</h1>
								<SearchBox searchChange={this.onSearchChange} />
							</div>
							<Scroll>
								<ErrBoundry>
									<CardList robots = {filteredRobots} />
								</ErrBoundry> 
							</Scroll>
						</div>
				)
			}
	}	
};



// render(
// 	return 
		
// 	);

export default App;
