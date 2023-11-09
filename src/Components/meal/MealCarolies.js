/** @format */

import React from "react";

const MealCarolies = ({ nutrients }) => {
  return (
    <>
      <ul className="text-gray-700 flex justify-around bg-pink-200 text-sm p-3 rounded-md m-auto">
        <li>
          <p className="font-thin md:font-semibold">Calories</p>
          <p className="font-semibold md:font-thin">{nutrients.calories}</p>
        </li>
        <li>
          <p className="font-thin md:font-semibold">Carbs</p>
          <p className="font-semibold md:font-thin">
            {nutrients.carbohydrates}
          </p>
        </li>
        <li>
          <p className="font-thin md:font-semibold">Fat</p>
          <p className="font-semibold md:font-thin ">{nutrients.fat}</p>
        </li>
        <li>
          <p className="font-thin md:font-semibold">Protein</p>
          <p className="font-semibold md:font-thin">{nutrients.protein}</p>
        </li>
      </ul>
    </>
  );
};

export default MealCarolies;
