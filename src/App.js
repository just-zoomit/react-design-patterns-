
import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from './ControlledModal';
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";


import { UncontrolledForm } from "./UncontrolledForm";
import {UncontrolledModal} from "./UncontrolledModal";

function App() {
	const [showModal, setShowModal] = useState(false);

	const StepOne = ({goToNext}) => (
		<>
		<h1>Step One</h1>
		<button onClick={() => goToNext({name: "John Doe"})}> Next</button>
		</>
	);

	const StepTwo = ({goToNext}) => (
		<>
		<h1>Step Two</h1>
		<button onClick={() => goToNext({age: "100"})}>Next</button>
		</>
	);

	const StepThree = ({goToNext}) => (
		<>
		<h1>Step Three</h1>
		<button onClick={() => goToNext({hairColor: "Gray"})}>Next</button>
		</>
	);

	return (
		<>
		<h1>Higher Components</h1>

		{/* Note the props have to match those defined in Controlled Modal JS */}
	
		<UncontrolledOnboardingFlow onFinish={ data => {
		console.log(data)
		alert("Onboarding Complete");

		}}>
		<StepOne/>
		<StepTwo/>
		<StepThree/>
		</UncontrolledOnboardingFlow>

	

		</>
	);
}

export default App;
