import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const AddContact = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const [contactData, setContactData] = useState({ agenda_slug: "GaretKean" });

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actions.addContacts(contactData);
            await actions.getContacts();
            navigate("/");
        } catch (error) {
            console.error("Error adding contact", error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5">Add a new contact</h1>
            <form className="contact-form"
                onSubmit={handleSubmit}
            >
                <div className="form-group mt-3">
                    <label>
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
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
                    Save
                </button>
            </form>
            <a href="/">Or get back to contacts</a>
        </div>
    )

}