import { printProps } from "./printProps";
import { UserInfo} from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfoWrapped, '234');
function App() {

	return (
		<>
		<h1>Your code goes here</h1>
		<UserInfoWithLoader />
		</>
	);
}

export default App;
