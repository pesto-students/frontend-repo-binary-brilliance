const FilterTag = ({ label, isSelected, onClick }) => {
    const bgColor = isSelected ? 'bg-customYellow' : 'bg-white';
    const textColor = isSelected ? 'text-black' : 'text-gray-500';
    const borderColor = isSelected ? 'border-customYellow' : 'border-gray-300';

    return (
        <button
            onClick={onClick}
            className={`${bgColor} ${textColor} ${borderColor} border px-1 py-0.5 rounded-full text-xs font-medium m-0.5`}
        >
            {label}
        </button>
    );
};

export default FilterTag;