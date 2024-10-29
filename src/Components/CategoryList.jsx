import { CategoryItem } from "./CategoryItem";

export function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}
