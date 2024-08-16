import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";



const EditContact = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    });

    useEffect(() => {
        const contactData = store.contacts.find(
            (c) => c.id === parseInt(params.id)
        );

        if (contactData) {
            setContact(contactData)
        }
    }, [params.id, store.contacts])


    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        actions.editContact(params.id, contact);

        navigate("/");
    }
    return (
        <div className="container">
            <h1 className="text-center mt-5">Update Contact</h1>
            <form className="contact-form"
                onSubmit={handleSubmit}>

                <div className="form-group mt-3">
                    <label>
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={contact.name}
                        placeholder="Name"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        required
                    />
                </div>
                <div className="form-group mt-2">
                    <label>
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={contact.email}
                        placeholder="Enter email"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        required
                    />
                </div>
                <div className="form-group mt-2">
                    <label>
                        Phone:
                    </label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={contact.phone}
                        placeholder="Enter phone"
                        onChange={(e) => {
                            handleChange(e);
                        }} adress
                        required
                    />
                </div>
                <div className="form-group mt-2">
                    <label>
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={contact.address}
                        placeholder="Address"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary form-control mt-4"
                >
                    Update Contact
                </button>
            </form>
            <a href="/">Or get back to contacts</a>
        </div>
    )

};

EditContact.propTypes = {
    match: PropTypes.object
}


export default EditContact;