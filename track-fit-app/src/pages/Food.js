import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchFood } from "../redux/action";


export function Food()
{
    const dispatch = useDispatch();
    const food = useSelector((state)=>state.food);

    useEffect(()=>{
        dispatch(fetchFood());
    },[dispatch])

    return (<div>
        <ul>{food?.map((foodItem,index)=><li>
            {foodItem.name};
        </li>)}</ul>
    </div>)
}