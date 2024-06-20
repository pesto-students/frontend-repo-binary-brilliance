const ContrastButton = ({label, type = 'button', onClick, isRed }) => {
    const buttonColor = isRed ? 'customRed' : 'customYellow';
    const textColor = isRed ? 'white' : 'gray-700'
    return(
        <button type={type}
                onClick={onClick}
                className={`text-${textColor} bg-${buttonColor} hover:bg-${buttonColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-2 py-1 rounded-full text-sm font-medium`}>
            {label}
        </button>
    )
};

export default ContrastButton;