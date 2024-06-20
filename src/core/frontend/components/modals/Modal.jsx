import React, {useEffect, useState} from 'react';

const Modal = ({ label, isOpen, onClose, onSubmit, children }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [openCount, setOpenCount] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
        startCloseAnimation();
    };

    const startCloseAnimation = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
            setOpenCount(c => c + 1);
        }, 300);
    };

    useEffect(() => {
        if (isOpen) {
            setOpenCount(c => c + 1);
        }
    }, [isOpen]);

    return (
        <div key={openCount} className={`fixed inset-0 z-50 bg-gray-500 bg-opacity-50 flex items-center justify-center px-4 ${isOpen ? '' : 'hidden'}`}>
            <div
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}`}
                onSubmit={handleFormSubmit}
            >
                <button
                    onClick={startCloseAnimation}
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="px-6 py-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">{label}</h3>
                    {/* Use openCount as key to force rerender */}
                    <div>
                        {typeof children === "function" ? children({ onClose: startCloseAnimation }) : children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;