export default function NamePart(props) {
  return (
    // reusable component to display part of a name from the value prop
    <span className="NamePart">{props.value}</span>
  );
}


// add the above to FullName.jsx, then export it and import into App.jsx
