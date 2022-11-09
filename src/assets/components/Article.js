const Article = ({ article, index, basket, setBasket }) => {
  // functions
  const handlePlus = () => {
    const basketCopy = [...basket];
    basketCopy[index].quantity++;
    setBasket(basketCopy);
  };
  const handleMinus = () => {
    const basketCopy = [...basket];
    if (basketCopy[index].quantity > 1) {
      basketCopy[index].quantity--;
    } else {
      basketCopy.splice(index, 1);
    }
    setBasket(basketCopy);
  };

  // start here
  return (
    <div className="article">
      <div className="left">
        <button onClick={handleMinus} className="icon-minus"></button>
        <p>{article.quantity}</p>
        <button onClick={handlePlus} className="icon-plus"></button>
        <p>{article.title}</p>
      </div>
      <div className="right">
        <span>{(article.price * article.quantity).toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default Article;
