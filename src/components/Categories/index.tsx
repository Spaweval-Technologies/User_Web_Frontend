import CategoryCard from "../Common/Cards/CategoryCard";
import categories from "./data";

//css
import { CategoriesWrapper } from "./index.styles";

/**
 * Categories component
 * @returns {JSX.Element} - A component that displays a list of category cards.
 */
const Categories = () => {
  return (
    <CategoriesWrapper>
      {categories &&
        categories.map((category) => (
          <CategoryCard
            title={category.title}
            description={category.description}
            color={category.color}
            img={category.img}
            alt={category.alt}
            key={category.title}
          />
        ))}
    </CategoriesWrapper>
  );
};

export default Categories;
