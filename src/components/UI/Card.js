import "./Card.css";

export default function Card(props) {
  const classes = "card " + props.className;
  return (
    <div className={classes} data-testid={props.testid}>
      {props.children}
    </div>
  );
}
