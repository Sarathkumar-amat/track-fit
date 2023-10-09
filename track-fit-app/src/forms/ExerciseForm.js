import { useState } from "react";
import { allExerciseTypes } from "../utils/ExerciseTypes";
import { useDispatch } from "react-redux";
import { addExercise } from "../redux/action";

export function ExerciseForm()
{
    const [exerciseName,setExerciseName] = useState("");
    const [duration,setDuration]= useState(0);
    const [typeEx,setTypeEx]=useState("high-intensity-cardio");
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const exType = allExerciseTypes?.find(({exerciseType})=>exerciseType===typeEx);
        const exerciseObject = {
            name:exerciseName,
            duration:parseInt(duration),
            exerciseType:{
                exerciseName:exType.exerciseType,
                caloriesPerMin:exType.caloriesPerMin
            }
        }
        dispatch(addExercise(exerciseObject));
        setExerciseName("");
        setDuration(0);
        setTypeEx("high-intensity-cardio");
    }

    return (<div>
        <form>
            <label>Name of the exercise</label>
            <input value={exerciseName} onChange={(e)=>setExerciseName(e.target.value)} type="text" />
            <label>Duration</label>
            <input value={duration} onChange={(e)=>setDuration(e.target.value)} type="number" />
            <label>Exercise Type</label>
            <select value={typeEx} onChange={(e)=>setTypeEx(e.target.value)}>
                {allExerciseTypes?.map((type)=><option value={type.exerciseType}>
                    {type.exerciseType}
                </option>)}
            </select>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
    </div>)
}