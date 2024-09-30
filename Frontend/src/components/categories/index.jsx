import { useState } from "react";
import Category from "./Category";
import { Search } from "../search";
import { categoriesValues } from "./constants";
import { CategoriesWrapper } from "./styles";

const Categories = () => {
  const [catId, setCatId] = useState(0);
  return (
    <CategoriesWrapper>
      {categoriesValues.map((item, index) => (
        <Category
          delay={((index + 1) * 2) / 10}
          key={item.id}
          setCatId={setCatId}
          catId={catId}
          {...item}
        />
      ))}
      <Search />
    </CategoriesWrapper>
  );
};

export default Categories;
