import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
	const [state, setState] = useState(null);

	useEffect(() => {
		(async () => {
            // Userid is passed in as a prop from the parent component
			const data = await getDataFunc();
			setState(data);
		})();
	}, [getDataFunc()]);

	return (
		<>
		{React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { [resourceName]: state });
			}

			return child;
		})}
		</>
	);
}