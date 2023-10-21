function Greeting({ name = "World", children }) {
  return (
    <div className="componentBox">
      {name ? `Hello ${name}` : null}
      {children}
    </div>
  );
}

export default Greeting;
