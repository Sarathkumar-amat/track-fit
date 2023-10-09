import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteFood, fetchFood } from "../redux/action";


export function Food()
{
    const dispatch = useDispatch();
    const food = useSelector((state)=>state.food);
    const handleDeleteFood = (foodItem)=>{
       dispatch(deleteFood(foodItem));
    }
    useEffect(()=>{
        dispatch(fetchFood());
    },[dispatch])

    return (<div>
        <ul>{food?.map((foodItem,index)=><li key={index}>
            {foodItem.name}
            <button onClick={()=>handleDeleteFood(foodItem)}>delete</button>
        </li>)}</ul>
    </div>)
}