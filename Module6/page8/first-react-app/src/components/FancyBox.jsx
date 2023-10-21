export default function FancyBox(props) {
  return (
    <div className={"FancyBox FancyBox-" + props.color}>
      {props.children}{" "}
      {/* everything in between the opening
    <FancyBox> and closing </FancyBox> tags */}
    </div>
  );
}
