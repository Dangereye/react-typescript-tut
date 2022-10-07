export type AuthProfileProps = {
  name: string;
};

export default function AuthProfile({ name }: AuthProfileProps) {
  return <div>Private profile component for {name}</div>;
}
