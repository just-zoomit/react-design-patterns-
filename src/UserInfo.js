import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";
import { useResource } from "./useResource";
import { useDataSource } from "./useDataResource";
import { useUser } from "./useUser";

//Main component
const serverResource = resourceURL => async () => {
	const result = await axios.get(resourceURL);
	return result.data;
};

const localStoreResource = key => async () => {
	return localStorage.getItem(key);
}

export const UserInfo = ({userId}) => {
	//const user = useUser(userId);
	// const user = useResource(`/users/${userId}`);
	const user = useDataSource( serverResource(`/users/${userId}`) );
	const message = useDataSource( localStoreResource('message') );

	const { name, age, hairColor, hobbies } = user || {};

	return user ? (
		<>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	) : <p>Loading...</p>;
}