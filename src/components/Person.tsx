import { PersonProps } from "./Person.type";

export default function ({ name }: PersonProps) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}
