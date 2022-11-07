import Meal from "./Meal";

const Category = ({ category }) => {
  if (category.meals.length > 0) {
    return (
      <div className="container category">
        <div className="category-container">
          <h2>{category.name}</h2>
          <div className="meals">
            {category.meals.map((meal, index) => {
              return <Meal key={index} meal={meal} />;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Category;
