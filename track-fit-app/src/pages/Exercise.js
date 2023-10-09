import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchExercise } from "../redux/action";

export function Exercise()
{
    const dispatch = useDispatch();
    let exercise = useSelector((state)=>state.exercise);

    useEffect(()=>{
        dispatch(fetchExercise());
    },[dispatch]);

    return (<div>
        <ul>
            {exercise?.map((exerciseData,index)=>
            <li key={index}>
                {exerciseData?.name}
            </li>)}
        </ul>
    </div>)
}