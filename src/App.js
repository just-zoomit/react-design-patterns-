
import { useState } from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import {UncontrolledModal} from "./UncontrolledModal";
import { ControlledModal } from './ControlledModal';

function App() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
		<h1>Higher Components</h1>

		{/* Note the props have to match those defined in Controlled Modal JS */}
		<ControlledModal
		shouldShow={showModal}
		onRequestClose={() => 
			setShowModal(false) }
		>
			<h1>Modal Content</h1>
		</ControlledModal>
		
		<button onClick={() => setShowModal(true)}>
		{ showModal ? "Hide Modal" :  "Show Modal"}
		</button>

		</>
	);
}

export default App;
