import publicImages from "@/core/frontend/publicImages";

const FilterButton = ({className, onClick}) => {
    return (
        <button
            className={`${className} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}
            style={{
                backgroundImage: `url("${publicImages.FILTER_ICON}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            onClick={onClick}
        >
        </button>
    )
};

export default FilterButton;