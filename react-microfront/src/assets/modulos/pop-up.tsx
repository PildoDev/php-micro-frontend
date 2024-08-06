// PopUpModule.tsx
import React from "react";

interface PopUpModuleProps {
    message: string;
}

const PopUpModule: React.FC<PopUpModuleProps> = ({ message }) => {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Popup Title
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">{message}</div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                <button type="button" className="btn btn-primary">
                    Save changes
                </button>
            </div>
        </div>
    );
};

export default PopUpModule;
