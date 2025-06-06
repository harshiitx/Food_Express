import { useState,useEffect } from "react";
import { useParams,Link} from "react-router"
import DishShimmer from "./DishShimmer";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";


const Dish =()=>{
const {itemId}=useParams();
const [DishObj,setDishObj] = useState(null);
const dispatch = useDispatch();


const getDish =async ()=>{
    const Dish_Promise = await fetch(`https://dummyjson.com/recipes/${itemId}`);
    const Dish = await Dish_Promise.json();
    setDishObj(Dish);
}


const handleAddToCart = ()=>{
    //Dispatch an action
    dispatch(addItems(DishObj));
}
useEffect(()=>{getDish()},[itemId])

if (!DishObj) {
    return (<DishShimmer/>)
}
const { image, caloriesPerServing, prepTimeMinutes, rating, name, ingredients } = DishObj;
return (
<main id="dish" role="main" aria-label={`${name} dish details`}>
<section id="left_div" role="region" aria-label="Dish image and quick info">
<div id="dish_image">
    <img 
      src={image} 
      alt={`${name} - delicious dish ready to order`}
      role="img" 
    />
</div>
<div role="group" aria-label="Dish ratings and delivery info">
    <h2 role="heading" aria-level="2" aria-label={`Rating: ${rating} out of 5 stars`}>rating {rating}🌟</h2>
    <h3 role="heading" aria-level="3" aria-label={`Delivery time: ${prepTimeMinutes} minutes`}>delivery time {prepTimeMinutes} mins</h3>
</div>
</section>
<section id="right_div" role="region" aria-label="Dish details and ordering">
    <h1 role="heading" aria-level="1">Get {name}</h1>
    <h2 role="heading" aria-level="2" aria-label="Price: 149 rupees only">at rupees 149 only</h2>
    <h3 role="heading" aria-level="3" aria-label={`Total calories: ${caloriesPerServing} kilocalories`}>Total Calories {caloriesPerServing}</h3>
    <p role="text" aria-label={`Ingredients: ${ingredients.join(', ')}`}>
      <strong>Ingredients: </strong> {ingredients} 
    </p>
    <button 
      onClick={handleAddToCart}
      aria-label={`Add ${name} to cart for 149 rupees`}
      role="button"
    >
      Add to Cart 🛒 
    </button>
</section>
</main>)

}


export default Dish