import NamePart from "./NamePart";

export default function FullName(props) {
  return (
    // composes the NamePart component to display a full name
    <div className="FullName componentBox">
      Full name: <NamePart value={props.first} />{" "}
      <NamePart value={props.last} />
    </div>
  );
}
