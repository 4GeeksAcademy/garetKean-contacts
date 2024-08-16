import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "./Modal"

import svgimg from "../../img/user.256x256.png"
import { MdDeleteForever } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";





const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const { name, email, address, phone } = contact;

    const [showModal, setShowModal] = useState(false);


    const handleDelete = () => {
        setShowModal(true);
    }
    const confirmDelete = () => {
        actions.deleteContacts(contact.id)
        setShowModal(false);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <li className="list-group-item">
            <div className="align-items-center row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img
                        src={svgimg} alt="userImage" width="110" className="mx-auto ms-4"
                    />
                </div>
                <div className="text-center text-sm-left col-12 col-sm-6 col-md-9">
                    <div className="float-end">
                        <Link to={`/editContact/${contact.id}`}>
                            <button className="btn">
                                <FaPencil />
                            </button>
                        </Link>
                        <button className="btn"
                            onClick={handleDelete}
                            id="Delete">
                            <MdDeleteForever />
                        </button>
                        {showModal && <Modal closeModal={closeModal} confirmDelete={confirmDelete} />}
                    </div>
                    <div className="text-start">
                        <label className="label lead fw-bold">
                            {name}
                        </label>
                        <br />
                        <FaMapMarkerAlt />
                        <span className="text-muted ms-2">
                            {address}
                        </span>
                        <br />
                        <FaPhoneAlt />
                        <span className="text-muted ms-2">
                            {phone}
                        </span>
                        <br />
                        <MdEmail />
                        <span className="text-muted ms-2">
                            {email}
                        </span>


                    </div>
                </div>
            </div >
        </li >
    )
}

export default ContactCard;