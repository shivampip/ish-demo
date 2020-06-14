import React from "react";

class Button extends React.Component {
	sayHello = (name) => {
		alert("Hello " + name);
	};

	render() {
		return (
			<div
				style={{
					color: "yellow",
					backgroundColor: "red",
					width: "300px",
				}}
				onClick={() => this.sayHello(this.props.text)}
			>
				<h2>{this.props.text}</h2>
			</div>
		);
	}
}

export default Button;
