import React, { Component } from 'react'

class ErrBoundry extends Component {

	constructor (props) {
		super(props);
		this.state = 
			{ hasError : false }
	}

	componentDidCatch (error, info) {
		this.setState ({ hasError: true})
	}

	render () {
		if (this.state.hasError) {
			return <h2 style={{color:"black"}} >It seems that something is not working well</h2>
		}
		return this.props.children
	}

}

export default ErrBoundry