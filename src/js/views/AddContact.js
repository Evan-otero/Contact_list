import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";

export default class AddContact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", phone: "", address: "" };
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
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
							<input
								onChange={e => this.setState({ email: e.target.value })}
								type="email"
								className="form-control"
								placeholder="Enter email"
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								onChange={e => this.setState({ phone: e.target.value })}
								type="phone"
								className="form-control"
								placeholder="Enter phone"
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								onChange={e => this.setState({ address: e.target.value })}
								type="text"
								className="form-control"
								placeholder="Enter address"
							/>
						</div>
						<Consumer>
							{({ store, actions }) => {
								return (
									<Link className="mt-3 w-100 text-center" to="/">
										<button
											type="button"
											onClick={() =>
												actions.createContact(
													this.state.name,
													this.state.address,
													this.state.phone,
													this.state.email
												)
											}
											className="btn btn-primary form-control">
											save
										</button>
									</Link>
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
