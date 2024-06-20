import React, {useState} from 'react';

const ThreePartLayout = ({ leftChildren, centreChildren, rightChildren, ComponentToShowAsModalInMobileView, OpenModalButtonComponent, className }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ModalComponent = ComponentToShowAsModalInMobileView || rightChildren.type;
    return (
        <div className={`min-h-screen flex flex-col ${className}`}>
            <div className="container min-w-full mx-auto flex">
                <div className="hidden md:block md:w-1/5 md:pb-16">
                    <div className="sticky top-24 pl-8">
                        {leftChildren}
                    </div>
                </div>
                <div className="w-full md:w-3/5">
                    {centreChildren}
                </div>
                <div className="hidden md:block md:w-1/5 md:pb-16">
                    <div className="sticky top-24 pr-8">
                        {rightChildren}
                    </div>
                </div>
            </div>
            {!isModalOpen && (<div className="md:hidden fixed bottom-4 left-4">
                <OpenModalButtonComponent onClick={() => setIsModalOpen(true)}/>
            </div>)}
            {isModalOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
                    <ModalComponent {...rightChildren.props} handleCloseForMobileView={() => setIsModalOpen(false)} />
                </div>
            )}
        </div>
    );
};

export default ThreePartLayout;
