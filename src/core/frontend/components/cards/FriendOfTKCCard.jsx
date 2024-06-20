const FriendOfTKCCard = ({ title, subtitle, icon }) => {
    return (
        <div className='flex flex-col items-center relative'>
            <img src={icon} alt={title} className="w-16 h-16 z-10 absolute rounded-full object-cover" style={{ top: '20%', transform: 'translateY(-50%)' }} />
            <div className="p-4 w-2/3 flex flex-col bg-gradient-to-b from-green-100 to-customDarkCream rounded-lg shadow-md mt-12">
                <span className="text-center text-sm font-bold">{title}</span>
                <span className="text-center text-xs font-medium">{subtitle}</span>
            </div>
        </div>
    );
};

export default FriendOfTKCCard;