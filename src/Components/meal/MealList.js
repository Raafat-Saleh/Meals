/** @format */

import React from "react";
import MearlRecipe from "./MearlRecipe";
import MealCarolies from "./MealCarolies";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <br></br>

      <MealCarolies nutrients={nutrients} />

      <section className="container lg:flex  mx-auto">
        {mealData.meals.map((meal) => {
          return <MearlRecipe key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
