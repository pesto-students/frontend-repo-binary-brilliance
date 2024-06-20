import React from "react";

const ModalCloseButton = ({onClick}) => {
    return (
        <button className="md:hidden text-xl mb-1 text-gray-600 hover:text-gray-800 ml-auto"
                onClick={onClick}>
            &times;
        </button>
    );
};

export default ModalCloseButton;