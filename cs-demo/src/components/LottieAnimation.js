import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";

const LottieAnimation = ({ path }) => {
    const [animationValue, setAnimationValue] = useState();

    useEffect(() => {
        import(`../assets/${path}.json`).then((animation) => {
            setAnimationValue(animation)
        })
    }, [path]);


    return (
        <div>
            <Lottie animationData={animationValue} loop={true} style={{
                width: 500, height: 700
            }} />
        </div>
    );
};

export default LottieAnimation;
