// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React from 'react';

class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			userLiked: props.userLiked,
			likes: props.likes
		}
	}
	likeItem = () => {
		this.setState(
			{ userLiked: !this.state.userLiked }
		)

		let likeDirection = this.state.userLiked ? -1 : 1;
		 this.setState(
			{ likes: this.state.likes + likeDirection }
		)
	}

	render() {
		const { userLiked, likes } = this.state;
		let isLiked = this.state.userLiked ? 'is-liked' : '';
		return(
			<div className="Likes">
				<span>
					<button 
					className={`LikesButton ${isLiked}`} 
					onClick={this.likeItem}
					>
					👍🏼
					</button>
					<span className="LikesCounter">
						{this.state.likes}
					</span>
				</span>
			</div>
		)
	}
}

export default Likes
