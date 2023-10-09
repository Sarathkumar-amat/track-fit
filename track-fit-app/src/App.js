
import './App.css';
import { NavBar } from './components/NavBar';
import { ExerciseForm } from './forms/ExerciseForm';
import { FoodForm } from './forms/FoodForm';
import { Dashboard } from './pages/Dashboard';
import { Exercise } from './pages/Exercise';
import { Food } from './pages/Food';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/food" element={<Food />} />
        <Route path="/addFood" element={<FoodForm />} />
        <Route path="/addExercise" element={<ExerciseForm />} />
      </Routes>
    </div>
  );
}

export default App;
