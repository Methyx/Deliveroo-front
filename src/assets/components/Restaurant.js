const Restaurant = (data) => {
  return (
    <div className="container restaurant">
      <div className="left">
        <h1>{data.data.restaurant.name}</h1>
        <p>{data.data.restaurant.description}</p>
      </div>
      <div className="right">
        <img src={data.data.restaurant.picture} alt="restaurant" />
      </div>
    </div>
  );
};

export default Restaurant;
