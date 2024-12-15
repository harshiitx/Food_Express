import { useState,useEffect } from "react";
import { useParams,Link} from "react-router"
import DishShimmer from "./DishShimmer";


const Dish =()=>{
const {itemId}=useParams();
const [DishObj,setDishObj] = useState(null);

const getDish =async ()=>{
    const Dish_Promise = await fetch(`https://dummyjson.com/recipes/${itemId}`);
    const Dish = await Dish_Promise.json();
    setDishObj(Dish);
}

useEffect(()=>{getDish()},[itemId])

if (!DishObj) {
    return (<DishShimmer/>)
}
const { image, caloriesPerServing, prepTimeMinutes, rating, name, ingredients } = DishObj;
return (<div id="dish">
<div id="left_div">
<div id="dish_image">
    <img src={image}/>
</div>
<div>
    <h2>rating {rating}🌟</h2>
    <h3>delivery time {prepTimeMinutes} mins</h3>
</div>
</div>
<div id="right_div">
    <h1>Get {name}</h1>
    <h2>at rupees 149 only</h2>
    <h3>Total Calories {caloriesPerServing}</h3>
    <p><strong>Ingredients: </strong> {ingredients} </p>
    <Link to="/"><button>Add to Cart 🛒 </button></Link>
</div>
</div>)

}


export default Dish