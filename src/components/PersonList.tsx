import { Name } from "./Person.type";

type PersonListProps = { names: Name[] };

export default function PersonList(props: PersonListProps) {
  return (
    <ul>
      {props.names.map((name) => (
        <li key={name.first}>
          {name.first} {name.last}
        </li>
      ))}
    </ul>
  );
}
