const LongLightButton = ({ label, type = 'button', onClick }) => {
    const handleClick = (event) => {
        if (onClick) {
            event.preventDefault();
            onClick(event);
        }
    };

    const widthStyle = `w-full`;
    const colorStyle = `bg-white hover:bg-gray-100 text-gray-700`;
    const additionalStyles = `px-2 py-1 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`;

    const buttonStyle = `${widthStyle} ${colorStyle} ${additionalStyles}`;

    return (
        <button
            type={type}
            className={buttonStyle}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default LongLightButton;