import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Meal = ({ meal, basket, setBasket }) => {
  // function
  const handleOnClick = () => {
    const basketCopy = [...basket];
    const purchase = {
      id: meal.id,
      title: meal.title,
      price: meal.price,
    };
    const AlreadyInIndex = basketCopy.findIndex((item) => item.id === meal.id);
    if (AlreadyInIndex !== -1) {
      basketCopy[AlreadyInIndex].quantity++;
    } else {
      purchase.quantity = 1;
      basketCopy.push(purchase);
    }
    setBasket(basketCopy);
  };

  // Start here
  return (
    <div className="meal" onClick={handleOnClick}>
      <div className={meal.picture ? "left" : null}>
        <h4>{meal.title}</h4>
        <h5>{meal.description}</h5>
        <p>
          {`${meal.price} €  `}
          <span>
            {meal.popular && (
              <>
                <FontAwesomeIcon icon="star" /> Populaire
              </>
            )}
          </span>
        </p>
      </div>
      {meal.picture && (
        <div className="right">
          <img src={meal.picture} alt="plat en situation" />
        </div>
      )}
    </div>
  );
};

export default Meal;
