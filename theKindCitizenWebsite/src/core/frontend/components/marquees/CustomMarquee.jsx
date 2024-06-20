import React from 'react';
import Marquee from 'react-marquee-slider';

const CustomMarquee = ({logos}) => {
    return (
        <Marquee
            velocity={25}
            minScale={0.7}
            resetAfterTries={200}
            scatterRandomly={false}
            direction="right"
            onFinish={() => console.log("Marquee finished a loop")}
            onInit={() => console.log("Marquee initialized")}
        >
            {[...logos, ...logos].map((logo, index) => (
                <div key={`logo-${index}`} className="mr-12">
                    <img src={logo} alt={`Logo ${index}`} className="max-h-20"/>
                </div>
            ))}
        </Marquee>
    );
};

export default CustomMarquee;
