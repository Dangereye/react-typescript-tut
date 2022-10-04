type ContainerProps = {
  styles: React.CSSProperties;
};

export default function Container(props: ContainerProps) {
  return <div style={props.styles}>text goes here.</div>;
}
