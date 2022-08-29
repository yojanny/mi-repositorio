import UserData from "./UserData";

function UserList(props) {
  return (
    <ul>
      {props.userData.map((user) => {
        return <UserData userInfo={user} key={user.id}></UserData>;
      })}
    </ul>
  );
}

export default UserList;
