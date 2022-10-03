import { ReactElement } from "react";

type OscarProps = {
  children: ReactElement;
};
export default function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}
