import Comment from "./Comment";

function UserList() {
  const users = ["Firulais", "Perro Sanxe", "Pepito"];

  return (
    <>
      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
      <Comment />
    </>
  );
}

export default UserList;
