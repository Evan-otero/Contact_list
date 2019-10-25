import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "../component/ContactCard.js";
import Modal from "../component/Modal";
import getState from "../store/flux";
import Provider, { Consumer } from "../store/appContext.js";
import appContext from "../store/appContext.js";
import injectContex from "../store/appContext.js";

export default class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					</p>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							<Consumer>
								{({ store, actions }) => {
									return store.alpha.map((name, index) => {
										return (
											<ContactCard
												key={index}
												name={store.alpha[index].full_name}
												email={store.alpha[index].email}
												phone={store.alpha[index].phone}
												address={store.alpha[index].address}
												index={index}
											/>
										);
									});
								}}
							</Consumer>
						</ul>
					</div>
				</div>
				<Modal show={this.state.showModal} onClose={() => this.setState({ showModal: false })} />
			</div>
		);
	}
}
