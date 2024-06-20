const Section = ({ id, children, className, isGradientCream, isCream, horizontalPositionOfChildren = 'start', isTransparent, isPadding = true, layout = 'horizontal'}) => {
    const colourToBeApplied = isCream ? 'bg-customCream' : isGradientCream ? 'bg-gradient-to-b from-customCream to-white' : isTransparent ? 'bg-transparent' : 'bg-white';
    const paddingStyles = isPadding ? 'px-12 py-12' : '';
    layout = horizontalPositionOfChildren === 'center' ? 'vertical' : layout;
    const layoutStyle = layout === 'vertical' ? 'flex flex-col' : 'flex flex-col md:flex-row';
    const childrenPositionStyles = horizontalPositionOfChildren === 'center' ? 'items-center' : 'items-start';
    return(
        <div id={id} className={`w-full ${className} ${colourToBeApplied} ${paddingStyles} ${layoutStyle} ${childrenPositionStyles} gap-7`}>
            {children}
        </div>
    );
};

export default Section;