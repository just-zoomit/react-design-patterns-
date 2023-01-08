
import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from './ControlledModal';
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";


import { UncontrolledForm } from "./UncontrolledForm";
import {UncontrolledModal} from "./UncontrolledModal";

const StepOne = ({goToNext}) => (
	<>
	<h1>Step One</h1>
	<button onClick={() => goToNext({name: "John Doe"})}> Next</button>
	</>
);

const StepTwo = ({goToNext}) => (
	<>
	<h1>Step Two</h1>
	<button onClick={() => goToNext({age: "50"})}> Next</button>
	</>
);

const StepThree = ({goToNext}) => (
	<>
	<h1>Step Three</h1>
	<p> Congratulations! You qualify for our senior discount </p>
	<button onClick={() => goToNext({})}> Next </button>
	</>
);

const StepFour = ({goToNext}) => (
	<>
	<h1>Step Four</h1>
	<button onClick={() => goToNext({hairColor: "Gray"})}>Next</button>
	</>
);



function App() {
	const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

	const [showModal, setShowModal] = useState(false);

	const onNext = stepData => {

        setOnboardingData({...onboardingData, ...stepData});
		setCurrentIndex(currentIndex + 1);
    };

	return (
		<>
		<h1>Higher Components</h1>

		{/* Note the props have to match those defined in Controlled Modal JS */}
	
		<ControlledOnboardingFlow
		// onFinish= {
		// 	data => {
		// 	console.log("Data ", data)
		// 	alert("Onboarding Complete")
		// }}
		currentIndex={currentIndex}
		onNext={onNext}
		>
		<StepOne/>
		<StepTwo/>
		
		{ onboardingData.age >= 62 && <StepThree/>}
		<StepFour/>
		</ControlledOnboardingFlow>

	

		</>
	);
}

export default App;
