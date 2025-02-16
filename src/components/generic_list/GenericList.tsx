import { ReactNode } from "react";
import './GenericList.css'
interface GenericListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const GenericList = <T,>({ items, render }: GenericListProps<T>) => {
  return (
    <ul className="gold">
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default GenericList;
