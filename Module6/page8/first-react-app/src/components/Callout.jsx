import FancyBox from "./FancyBox";

export default function Callout(props) {
  return (
    <FancyBox color="blue">
      <h1 className="Callout-title">{props.title}</h1>
      <p className="Callout-message">{props.message}</p>
      {props.children}{" "}
      {/* everything in between the opening
    <Callout> and closing </Callout> tags */}
    </FancyBox>
  );
}
//
