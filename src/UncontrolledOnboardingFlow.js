import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);

    const goToNext = stepData => { 
        

        const nextStep = currentStep + 1;

        const updatedData= {
            ...onboardingData,
            ...stepData,
        }

        console.log(updatedData);
        if (nextStep < children.length) {
            setCurrentStep(nextStep)
        } else {
            onFinish(updatedData);
        }


        setOnboardingData(currentStep + 1);
    
    };

    const currentChild = React.Children.toArray(children)[currentStep];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}