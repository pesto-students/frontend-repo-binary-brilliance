import React from "react";

const Heading = ({className, labelConfig, layout = 'horizontal', horizontalPositionOfChildren = 'start', size ='large' }) => {
    const {blue, black, isBlueFirst} = labelConfig;
    const classSizeMap = {
        large: 'text-4xl',
        medium: 'text-3xl',
        small: 'text-2xl',
        extraSmall: 'text-1xl'
    }
    const containerClasses = `${className} ${classSizeMap[size]} font-bold text-gray-800 ${layout === 'vertical' ? 'flex flex-col' : 'flex'}`;
    const childrenPositionStyles = horizontalPositionOfChildren === 'center' ? 'items-center' : 'items-start';
    const textElement = isBlueFirst ?
        <div className={`flex flex-col sm:flex-row ${childrenPositionStyles} sm:space-x-2`}>
            <span className='text-customBlue block'>{blue}</span>
            <span className='block'>{black}</span>
        </div> :
        <div className={`flex flex-col sm:flex-row ${childrenPositionStyles} sm:space-x-2`}>
            <span className='block'>{black}</span>
            <span className='text-customBlue block'>{blue}</span>
        </div>
    return (
        <h2 className={containerClasses}>
            {textElement}
        </h2>
    );
};

export default Heading;