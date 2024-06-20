import React from "react";

const HorizontalLine = ({isMargin = true}) => {
    return (<hr className={`${isMargin ? 'my-4' : '' } w-full`}/>);
};

export default HorizontalLine;