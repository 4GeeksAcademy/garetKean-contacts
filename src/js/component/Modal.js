import React from "react";



const Modal = ({ closeModal, confirmDelete }) => {

    return (
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Are you sure?</h5>
                        <button type="button" class="btn-close" onClick={closeModal}></button>
                    </div>
                    <div class="modal-body">
                        <p>If you delete this, the entire universe will go down!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={closeModal}>oh no!</button>
                        <button type="button" class="btn btn-primary" onClick={confirmDelete}>yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Modal;