export const LargePersonListItem = ({ person }) => {
	const { name, age, hairColor, hobbies } = person;

	return (
		<>
        <div>
        <h3>LargePersonListItem</h3>
        </div>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	);
}