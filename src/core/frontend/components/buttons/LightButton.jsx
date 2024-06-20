const LightButton = ({label, onClick, className= ''}) => {
    const defaultStyles = "text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-2 py-1 rounded-full text-sm font-medium";
    const styles = `${className} ${defaultStyles}`
    return(
        <button onClick={onClick} className={styles}>{label}</button>
    )
};

export default LightButton;