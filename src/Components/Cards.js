const Cards = (props) => {
  const Price = 149;
  const { image, caloriesPerServing, prepTimeMinutes, rating, name } = props.objaa;

  return (
    <article className="card" role="article" aria-label={`${name} dish card`}>
      <img 
        className="food_img" 
        src={image} 
        alt={`${name} - delicious food dish`}
        role="img"
      />
      <div className="food_detail" role="group" aria-label="Dish details">
        <h3 role="heading" aria-level="3">{name}</h3>
        <div role="text" aria-label={`Price: ${Price} rupees only`}>price {Price} ₹ only</div>
        <div role="text" aria-label={`Delivery time: ${prepTimeMinutes} minutes`}>delivery time {prepTimeMinutes} min</div>
        <div role="text" aria-label={`Total calories: ${caloriesPerServing} kilocalories`}>Total Calories {caloriesPerServing} kcal</div>
        <div role="text" aria-label={`Rating: ${rating} out of 5 stars`}>rating {rating}🌟</div>
      </div>
    </article>
  );
};

export const TrendingCards = (Cards)=>{
  return (props) =>{
    return(
      <div role="group" aria-label="Trending dish">
        <div 
          className="trending-tag" 
          role="badge" 
          aria-label="This dish is currently trending"
        >
          Trending
        </div>
        <Cards {...props}/>
      </div>
    )
  }
}


export default Cards;
