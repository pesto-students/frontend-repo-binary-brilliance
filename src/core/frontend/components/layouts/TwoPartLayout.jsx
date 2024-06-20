import React, {useState} from 'react';

const TwoPartLayout = ({ leftChildren, rightChildren, ComponentToShowAsModalInMobileView, OpenModalButtonComponent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ModalComponent = ComponentToShowAsModalInMobileView || leftChildren.type;
    return (
        <div className="min-h-screen flex flex-col">
            <div className="container min-w-full flex">
                <div className="hidden md:block md:w-1/4 md:pb-14">
                    <div className="sticky top-0">
                        {leftChildren}
                    </div>
                </div>
                <div className="w-full md:w-3/4">
                    {rightChildren}
                </div>
            </div>
            {!isModalOpen && (<div className="md:hidden fixed bottom-4 left-4 z-10">
                <OpenModalButtonComponent onClick={() => setIsModalOpen(true)}/>
            </div>)}
            {isModalOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
                    <ModalComponent handleCloseForMobileView={() => setIsModalOpen(false)} />
                </div>
            )}
        </div>
    );
};

export default TwoPartLayout;