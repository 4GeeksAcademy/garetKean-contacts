import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard.js"



export const Home = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="container">
			<div className="d-flex justify-content-end">
				<Link to="/addContact">
					<button className="btn btn-success my-3">add Contact</button>
				</Link>
			</div>
			<div
				id="contacts"
				className="panel-collapse collapse show mb-5"
				aria-expanded="true"
			>
				<ul
					className="list-group pull-down"
					id="contact-list"
				>

					{store.contacts.map((contact, index) => (
						<ContactCard
							key={index}
							contact={contact}
							className="contact-card"
						/>
					))}
				</ul>
			</div>
		</div>
	)
};
