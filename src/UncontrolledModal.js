import { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
	background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`;
// Parent component cannot trigger the modal to show or hide
export const UncontrolledModal = ({ children }) => {
	// Determine whether the modal should be shown or not
	const [shouldShow, setShouldShow] = useState(false);

	return (
		<>
		<button onClick={() => setShouldShow(true)}>Show Modal</button>
		{shouldShow && (
			<ModalBackground onClick={() => setShouldShow(false)}>
				<ModalBody onClick={e => e.stopPropagation()}>
					<button onClick={() => setShouldShow(false)}>Hide Modal</button>
					{children}
				</ModalBody>
			</ModalBackground>
		)}
		</>
	);
}