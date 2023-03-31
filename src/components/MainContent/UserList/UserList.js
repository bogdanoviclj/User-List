import { getUsers } from "./RandomUsersData";
import { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './UserList.css'


export const UserList = () => {
    const [users, setUsers] = useState(getUsers().results);
    const randomUsers = users.slice(0, 10);

    const dateOfBirth = (dob) => {
        const date = new Date(dob);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    };

    return (
        <ul className="collection">
            {randomUsers.map(user => (
                <li className="collection-item avatar" key={user.phone}>
                    <img src={user.picture.large} alt="User" className="circle" />
                    <p> name: {user.name.first} </p>
                    <p> email: {user.email} </p>
                    <p> date of birth: {dateOfBirth(user.dob.date)} </p>
                </li>    
        ))}
        </ul>
    )
}