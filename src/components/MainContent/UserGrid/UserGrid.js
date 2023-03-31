import { useState } from "react";
import { getUsers } from "../UserList/RandomUsersData";
import 'materialize-css/dist/css/materialize.min.css';
import './UserGrid.css'

export const UserGrid = () => {
    const [users, setUsers] = useState(getUsers().results);
    const randomUsers = users.slice(0, 12);

    const emailAddress = (email) => {
        const address = email.split("@");
        const first = address[0].substring(0, 3);
        const last = address[0].substring(address[0].length - 2);
        return `${first}...${last}@${address[1]}`;
    }
  

    const dateOfBirth = (dob) => {
        const date = new Date(dob);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${month}.${day}.${year}.`;
    };

    return (
      <div className="row container">
        {randomUsers.map(user => (
          <div className="col s12 m4 l4" key={user.phone}>
            <div className="row first">
              <div className="col s12 m7 main-card">
                <div className="card">
                  <div className="card-image">
                    <img src={user.picture.large} />
                    <span className="card-title"> {user.name.first} </span>
                  </div>
                  <div className="card-content">
                  <p> Email: {emailAddress(user.email)} </p>
                  <p> Date of birth: {dateOfBirth(user.dob.date)} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}