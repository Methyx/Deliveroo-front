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
      <button>Valider mon panier</button>
      {basket.length === 0 ? (
        <div className="vide">Votre panier est vide</div>
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
            <p>Sous-total : {sousTotal()}</p>
            <p>Frais de livraison : 2,50 €</p>
            <p>Total : {sousTotal() + 2.5}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
