import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserLoader = ({ userId,children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
            // Userid is passed in as a prop from the parent component
			const response = await axios.get(`/users/${userId}`);
			setUser(response.data);
		})();
	}, [userId]);

	return (
		<>
		{React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { user });
			}

			return child;
		})}
		</>
	);
}