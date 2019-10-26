import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

export default class EditContact extends React.Component {
	constructor(props, { match }) {
		super(props, { match });
		this.state = {
			name: "",
			email: "",
			phone: "",
			address: "",
			index: this.props.match.params.theid
		};
	}

	render(props) {
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
								placeholder={this.state.name}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								onChange={e => this.setState({ email: e.target.value })}
								type="email"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								onChange={e => this.setState({ phone: e.target.value })}
								type="phone"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								onChange={e => this.setState({ address: e.target.value })}
								type="text"
								className="form-control"
							/>
						</div>
						<Consumer>
							{({ store, actions }) => {
								return (
									<Link className="mt-3 w-100 text-center" to="/">
										<button
											type="button"
											onClick={() =>
												actions.editContact(
													this.state.name,
													this.state.address,
													this.state.phone,
													this.state.email,
													this.state.index
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

EditContact.propTypes = {
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	name: PropTypes.string,
	match: PropTypes.object
};
