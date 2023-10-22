import Lottie from "lottie-react";
import React from "react";

const LottieAnimation = ({ animation }) => {
    return (
        <div>
            <Lottie animationData={animation} loop={true} style={{
                width: 500, height: 700
            }} />
        </div>
    );
};

export default LottieAnimation;
