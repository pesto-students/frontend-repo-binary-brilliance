const CauseCard = ({ title, icon }) => {
    return (
        <div className='flex flex-col items-center relative'>
            <img src={icon} alt={title} className="w-12 h-12 z-10 absolute" style={{ top: '30%', transform: 'translateY(-50%)' }} />
            <div className="p-4 bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 rounded-lg shadow-md mt-12">
                <span className="text-center text-sm font-medium">{title}</span>
            </div>
        </div>
    );
};

export default CauseCard;