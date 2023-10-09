import { useState } from "react"
import { useDispatch } from "react-redux";
import { addFood } from "../redux/action";

export function FoodForm()
{
    const [foodName,setFoodName] = useState("");
    const [calories,setCalories] = useState(0);
    const [carbohydrate,setCarbohydrate] = useState(0);
    const [protein,setProtein]=useState(0);
    const [fat,setFat]=useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const foodObject = {
            name:foodName,
            calories:parseInt(calories),
            protein:parseInt(protein),
            carbohydrate:parseInt(carbohydrate),
            fat:parseInt(fat)
        }
        dispatch(addFood(foodObject));
        setFoodName("");
        setCalories(0);
        setCarbohydrate(0);
        setProtein(0);
        setFat(0);
    }
    return (<div>
        <h2>Add New Food</h2>
        <form>
            <label>Food name</label>
            <input onChange={(e)=>setFoodName(e.target.value)} value={foodName} type="text"/>
            <label>Calories</label>
            <input onChange={(e)=>setCalories(e.target.value)} value={calories} type="Number"/>
            <label>Protein</label>
            <input onChange={(e)=>setProtein(e.target.value)} value={protein} type="Number"/>
            <label>Carbohydrate</label>
            <input onChange={(e)=>setCarbohydrate(e.target.value)} value={carbohydrate} type="Number"/>
            <label>Fat</label>
            <input onChange={(e)=>setFat(e.target.value)} value={fat} type="Number"/>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
    </div>)
}