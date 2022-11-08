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
      <button onClick={handleMinus}>-</button>
      <span>{article.quantity}</span>
      <button onClick={handlePlus}>+</button>
      <span>{article.title}</span>
      <span>{article.price}</span>
    </div>
  );
};

export default Article;
