type GreetProps = { name: string };

export function Greet(props: GreetProps) {
  return (
    <>
      <h2>Welcome {props.name}! You have 10 unread messages.</h2>
    </>
  );
}
