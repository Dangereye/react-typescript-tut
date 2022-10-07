type InputProps = React.ComponentProps<"input">;

export default function WrapInput(props: InputProps) {
  return <input {...props} />;
}
