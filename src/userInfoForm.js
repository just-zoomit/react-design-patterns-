import { withEditableUser } from "./withEditableUser";

export const UserInfoForm = withEditableUser( ({user, onUserChange, onUserSave, onResetUser}) => {
    const {name, age, hairColor } = user || {};


    return (
        <div>
            <h1>User Info</h1>
            <div>
                <label>First Name</label>
                <input value={name} onChange={e => onUserChange({name: e.target.value})}/>
            </div>
            <div>
                <label>Age</label>
                <input type="number" value={age} onChange={e => onUserChange({age: e.target.value})}/>
            </div>
            <div>
                <label>Hair Color </label>
                <input value={hairColor} onChange={e => onUserChange({hairColor: Number(e.target.value)})}/>
            </div>           
            <div>
                <button onClick={onUserSave}>Save</button>
                <button onClick={onResetUser}>Reset</button>
            </div>
        </div>
    );
});
