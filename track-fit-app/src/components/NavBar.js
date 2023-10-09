import { NavLink } from "react-router-dom";


export function NavBar()
{
    return (<div>
        <nav className="nav-bar">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/exercises">Exercises</NavLink>
            <NavLink to="/addExercise">Add Exercise</NavLink>
            <NavLink to="/food">Food</NavLink>
            <NavLink to="/addFood">Add Food</NavLink>
        </nav>
    </div>)
}