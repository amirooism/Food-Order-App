import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        console.log("Attempting to fetch data...");
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          console.log("Response was not OK:", response.status);
        } else {
          console.log("Response was OK:", response.status);
        }

        const data = await response.json();
        setLoadedData(data);
      } catch (error) {
        console.error("Error caught in catch block:", error.message);
      }
    }

    fetchMeals();
  }, []);
  console.log(loadedData);

  return (
    <div>
      
      <ul id="meals">
        {loadedData.map((meal) => (
         <MealItem key={meal.id} meal={meal}/>
        ))}
      </ul>
    </div>
  );
}
