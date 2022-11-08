import Article from "./Article";

const Panier = ({ basket, setBasket }) => {
  //   console.log(basket);
  const sousTotal = () => {
    let result = 0;
    for (let i = 0; i < basket.length; i++) {
      result += basket[i].price * basket[i].quantity;
    }
    return result;
  };
  // return is here
  return (
    <div>
      <button className={basket.length === 0 ? "valider blocked" : "valider"}>
        Valider mon panier
      </button>
      {basket.length === 0 ? (
        <p className="vide">Votre panier est vide</p>
      ) : (
        <>
          <div className="articles">
            {basket.map((article, index) => {
              return (
                <Article
                  key={article.id}
                  article={article}
                  index={index}
                  basket={basket}
                  setBasket={setBasket}
                />
              );
            })}
          </div>
          <div className="count">
            <div className="calculs">
              <p>
                Sous-total : <span>{sousTotal().toFixed(2)} €</span>
              </p>
              <p>
                Frais de livraison : <span>2.50 €</span>
              </p>
            </div>
            <div className="total">
              <p>
                Total : <span>{(sousTotal() + 2.5).toFixed(2)} €</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
