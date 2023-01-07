import axios from 'axios';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';

import { ResourceLoader } from './ResourceLoader';
import {ProductInfo} from './ProductInfo';

import { DataSource } from './DataSource';

function App() {

	const getServerData = url => async () => {
		const response = await axios.get(url);
		return response.data;
	}

	const getLocalStorageData = key => () => {
	
		return localStorage.getItem(key);

	}

	const Text = ({ message }) =>  <p>{message}</p>;

	return (
		<>
		{/* Anonymous Resource pattern  */}
		<DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
			<UserInfo />
		</DataSource>

		<DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
		
		<Text />

		</DataSource>

	

		{/* Generic Resource pattern  */}
		<ResourceLoader resourceURL="/users/123" resourceName="user">
			<UserInfo />
		</ResourceLoader>

		<ResourceLoader resourceURL="/users/123" resourceName="product">
			<ProductInfo />
		</ResourceLoader>

		{/* Less Dynamic pattern  */}
		<CurrentUserLoader>
			<UserInfo />
		</CurrentUserLoader>

		{/* More Dynamic pattern  */}
		<UserLoader userId={345}>
			<UserInfo />
		  </UserLoader> 


		</>
	);
}

export default App;
