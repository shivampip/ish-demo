import "./Card.css";
import React from "react";

import Button from "./Button";

class Card extends React.Component {
	render() {
		return (
			<div className="card-wrapper">
				<h1>{this.props.fname}</h1>
				<p>{this.props.des}</p>
				<Button text="Like" />
			</div>
		);
	}
}

export default Card;
