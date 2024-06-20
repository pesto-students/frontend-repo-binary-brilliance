import {useEffect, useState} from "react";
import Link from "next/link";

const ChangingImageSection = ({imageConfigs = []}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const secondsInWhichImageChanges = 7;
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imageConfigs.length - 1 ? 0 : prevIndex + 1
            );
        }, secondsInWhichImageChanges * 1000);

        return () => clearInterval(timer);
    }, [imageConfigs.length]);

    return (
        <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
            {imageConfigs.map((imageConfig, index) => (
                <div
                    key={imageConfig.src}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ zIndex: 0 }}
                >
                    <img
                        src={imageConfig.src}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                        alt={`Background ${index}`}
                    />
                    <div className="absolute inset-0 z-10 flex items-center justify-start m-10 md:ml-28">
                        <div className="text-left text-white max-w-md mx-0">
                            <h1 className="text-4xl font-extrabold md:text-7xl">{imageConfig.overlayContents.title}</h1>
                            <p className="text-3xl">{imageConfig.overlayContents.subtitle}</p>
                            <Link href={imageConfigs[currentImageIndex].href} className="absolute bottom-28 inline-flex items-center justify-center text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-4 py-2 rounded-full text-sm font-medium">
                                {imageConfig.overlayContents.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChangingImageSection;