// simpler Comment component with the user info section extracted out into its own component
import UserInfo from "./UserInfo";
import FormattedDate from "./FormattedDate";

export default function Comment(props) {
  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} />{" "}
      {/* here we pass the author prop down to the UserInfo component */}
      <div className="Comment-text">{props.text}</div>
      {/* <div className="Comment-date">{props.date.toLocaleString()}</div> */}
      <FormattedDate date={props.date}/>
    </div>
  );
}
