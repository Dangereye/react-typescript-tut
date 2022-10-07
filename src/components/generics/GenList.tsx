type GenListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export default function GenList<T extends string | number>({
  items,
  onClick,
}: GenListProps<T>) {
  return (
    <div>
      <h2>List of items.</h2>
      {items.map((item, i) => (
        <div key={i} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}
