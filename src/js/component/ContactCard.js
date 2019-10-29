import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { injectContext } from "../store/appContext.js";
import { appContext } from "../store/appContext.js";
import { Consumer } from "../store/appContext";
import { Link } from "react-router-dom";

class ContactCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { del: this.props.index };
	}

	render(props) {
		return (
			<Consumer>
				{({ store, actions }) => {
					return (
						<li className="list-group-item">
							<div className="row w-100">
								<div className="col-12 col-sm-6 col-md-3 px-0">
									<img
										src={MikePhoto}
										alt="Mike Anamendolla"
										className="rounded-circle mx-auto d-block img-fluid"
									/>
								</div>
								<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
									<div className=" float-right">
										<Link to={`/edit/${this.props.index}`}>
											<button className="btn">
												<i className="fas fa-pencil-alt mr-3" />
											</button>
										</Link>

										<button
											className="btn"
											onClick={() => actions.deleteContact(this.state.del, this.props.id)}>
											<i className="fas fa-trash-alt" />
										</button>
									</div>
									<label className="name lead">{this.props.name}</label>
									<br />
									<i className="fas fa-map-marker-alt text-muted mr-3" />
									<span className="text-muted">{this.props.address}</span>
									<br />
									<span
										className="fa fa-phone fa-fw text-muted mr-3"
										data-toggle="tooltip"
										title=""
										data-original-title="(870) 288-4149"
									/>
									<span className="text-muted small">{this.props.phone}</span>
									<br />
									<span
										className="fa fa-envelope fa-fw text-muted mr-3"
										data-toggle="tooltip"
										data-original-title=""
										title=""
									/>
									<span className="text-muted small text-truncate">{this.props.email}</span>
								</div>
							</div>
						</li>
					);
				}}
			</Consumer>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	name: PropTypes.string,
	index: PropTypes.number,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
export default ContactCard;
