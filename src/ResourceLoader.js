import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ResourceLoader = ({ resourceURL, resourceName, children }) => {
	const [state, setState] = useState(null);

	useEffect(() => {
		(async () => {
            // Userid is passed in as a prop from the parent component
			const response = await axios.get(resourceURL);
			setState(response.data);
		})();
	}, [resourceURL]);

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