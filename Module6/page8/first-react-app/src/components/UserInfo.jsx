import Avatar from "./Avatar";

export default function UserInfo(props) {
  return (
    <div className="UserInfo">
      {/* {" "} */}
      {/* the user info is one aspect of the comment */}
      {/* <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      /> */}
      <Avatar
        // src={props.user.avatarUrl}
        // alt={props.user.name}
        attributes = {props.user}
      />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}
