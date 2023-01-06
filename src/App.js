import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';


import { ResourceLoader } from './ResourceLoader';
import {ProductInfo} from './ProductInfo';

function App() {
	return (
		<>
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
