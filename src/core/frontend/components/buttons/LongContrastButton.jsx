import {useState} from "react";

const LongContrastButton = ({ label, type = 'button', onClick, isDisabledOnClick = false }) => {
    const [disabled, setDisabled] = useState(false);

    const handleClick = (event) => {
        if (onClick) {
            if (isDisabledOnClick) {
                setDisabled(true);
            }
            event.preventDefault();
            onClick(event);
        }
    };

    const colorStyle = 'bg-customYellow hover:bg-customYellow text-gray-700';
    const additionalStyles = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-full text-sm font-medium';
    const fullWidthStyle = 'w-full px-2 py-1';
    const buttonStyle = `${fullWidthStyle} ${colorStyle} ${additionalStyles}`;

    return (
        <button
            type={type}
            className={buttonStyle}
            onClick={handleClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default LongContrastButton;