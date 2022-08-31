import { User } from "./User";

export function UserList({users}){
    return(
        <ul>
            {
                users.map(user => <li key={user.login.uuid}> <User userInfo={user}></User>

                </li>)
            }
        </ul>
    )
}