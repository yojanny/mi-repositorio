import DateInfo from "./DateInfo";
import UserInfo from "./UserInfo";

function Comment() {
  return (
    <div className="Comment">
      <UserInfo></UserInfo>
      <div className="Comment-text">Como mola React</div>
      <DateInfo></DateInfo>
    </div>
  );
}

export default Comment;
