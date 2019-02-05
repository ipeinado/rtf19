import React, { Component } from 'react'
import { Link } from 'gatsby'

import { FaBeer } from 'react-icons/fa'

import styled from 'styled-components'

const NavigationList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	width: 100%;

	&:[aria-expanded="false"] {
		display: none;
	}
	
	@media (min-width: 768px) {
		width: auto;
		float: right;
	}
`

const NavigationItem = styled.li`
	border-bottom: 1px solid #eee;
	margin: 0;

	&.button {
		background-color: #F7C022;

		&:hover {
			background-color: #FFD24D;
		}
	}

	& > a {
		display: block;
		padding: .7rem;
		font-size: 0.9rem;
		text-decoration: none;
		font-weight: 800;
		color: #000;
		text-transform: uppercase;

	}

	@media (min-width: 768px) {
		display: inline-block;
		border-bottom: 5px solid #fff;

		&:hover {
			border-bottom: 5px solid #F7C022;
		}
	}

`

const ListLink = props => (
	<NavigationItem className={ props.className }>
		<Link to={ props.to } >{ props.children }</Link>
	</NavigationItem>
)

const CollapseButton = (props) => (
	<button 
		aria-expanded={ props.expanded }
		onClick={ props.onClick }
	>
		<FaBeer />
	</button>
)

class Navigation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			active: props.active,
		}
	}

	handleClick = () => {
		console.log("something")
	}

	render() {
		return (
			<div>
				<CollapseButton 
					expanded={ this.state.expanded } 
					onClick={ this.handleClick }
				/>
				<NavigationList aria-expanded={ this.state.expanded }>
					<ListLink to="/">Home</ListLink>
					<ListLink to="/page-2">Who We Are</ListLink>
					<ListLink to="/">What We Do</ListLink>
					<ListLink to="/" className="button">Get Involved</ListLink>
				</NavigationList>
			</div>
		)
	}
}

export default Navigation