const CityCard = ({ title, eventCount = 0, imageSrc }) => {
    let stripComponent;
    if (parseInt(eventCount) > 0) {
        stripComponent = <div className="p-3 flex items-center justify-between bg-customBlue">
            <span className="text-sm font-medium text-white">{eventCount} Events</span>
            <div className="text-white">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    } else {
        stripComponent = <div className="p-3 flex items-center justify-between bg-customBlack">
            <span className="text-sm font-medium text-white">Coming soon</span>
            <div className="text-white">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    }
    return (
        <div className="relative w-48 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="w-full overflow-hidden">
                <img src={imageSrc} alt={title} className="object-cover object-center h-48 w-full" />
                {/* Overlay and title are positioned absolutely within this div */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute top-1 left-1 bg-opacity-75 bg-transparent text-white text-sm font-bold py-1 px-3 rounded-bl-lg">
                    {title}
                </div>
            </div>
            {stripComponent}
        </div>
    );
};

export default CityCard;