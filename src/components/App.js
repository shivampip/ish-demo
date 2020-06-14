import React from "react";
import axios from "axios";

import Card from "./Card";
import Button from "./Button";

class App extends React.Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		console.log("Component Displayed");
		// API Call

		axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
			console.log("Reasponse Received");
			console.log(res.data);
			this.setState({ posts: res.data });
		});
	}

	render() {
		let py = "Ruby";
		py = "Java";

		return (
			<div>
				<h1>Hello Ishwar</h1>
				<Card fname="Shivam" city="Pipariya" />
				<Card fname="Ishwar" />
				<Button text="App Text" newAtt={py} />
				{this.state.posts.map((post) => {
					return <Card fname={post.title} des={post.body} />;
				})}
			</div>
		);
	}
}

export default App;
