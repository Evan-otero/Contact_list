import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";

export default class EditContact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "" };
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Edit a new contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input
								onChange={e => this.setState({ name: e.target.value })}
								type="text"
								className="form-control"
								placeholder="Full Name"
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Enter email" />
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="phone" className="form-control" placeholder="Enter phone" />
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter address" />
						</div>
						<Consumer>
							{({ store, actions }) => {
								return (
									<button
										type="button"
										onClick={() => actions.createContact(this.state.name)}
										className="btn btn-primary form-control">
										save
									</button>
								);
							}}
						</Consumer>
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</form>
				</div>
			</div>
		);
	}
}
