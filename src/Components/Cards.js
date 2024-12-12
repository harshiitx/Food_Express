import { price } from "../utils/constants";

const Cards = (props) => {
  const Price = 149;
  ({ image, caloriesPerServing, prepTimeMinutes, rating, name } = props.objaa);

  return (
    <div id="card">
      <img id="food_img" src={image} />
      <div id="food_detail">
        <div>{name}</div>
        <div>price {Price} rupees only</div>
        <div>delivery time {prepTimeMinutes} min</div>
        <div>Total Calories {caloriesPerServing} kcal</div>
        <div>rating {rating}🌟</div>
      </div>
    </div>
  );
};

export default Cards;