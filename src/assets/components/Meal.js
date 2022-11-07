import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Meal = ({ meal }) => {
  return (
    <div className="meal">
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
