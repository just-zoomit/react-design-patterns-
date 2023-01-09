import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

function App() {
	return (
		<>
		<h1>Your code goes here </h1>
		<UserInfo userId="123"/>
		<UserInfo userId="234"/>
		<UserInfo userId="345"/>
		<h2> ProductInfo </h2>
		<ProductInfo productId='1234'/>
		</>
	);
}

export default App;
