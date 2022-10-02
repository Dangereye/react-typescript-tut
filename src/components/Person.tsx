type PersonProps = {
  name: { first: string; last: string };
};
export default function (props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}
