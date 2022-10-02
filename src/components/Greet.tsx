type GreetProps = { name: string; messageCount: number; isLoggedIn: boolean };

export function Greet(props: GreetProps) {
  return (
    <>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : "Welcome Guest!"}
      </h2>
    </>
  );
}
