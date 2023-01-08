import { printProps } from "./printProps";
import { UserInfo} from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);
function App() {

	return (
		<>
		<h1>Your code goes here</h1>
		<UserInfoWrapped word="hello" age={25} name={{name: 'Shaun'}} />
		</>
	);
}

export default App;
