/** @format */

import React, { useState, useEffect } from "react";

const MearlRecipe = ({ meal }) => {
  const [show, setshow] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setshow(false);
    }, 1400);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <div className=" bg-white rounded-xl shadow-lg  p-3 items-center  mt-3 min-h-200 mx-2 mb-10 xl:mt-4">
      <h1 className="mt-2 mb-5 md:text-lg   text-center items-center text-orange-500 font-bold">
        {meal.title.split(" ")[0] +
          " " +
          meal.title.split(" ")[1] +
          " " +
          meal.title.split(" ")[2]}
      </h1>
      <div className={`skeleton_Container ${show ? "shw" : "none"}`}>
        <div className="skeleton_image skeleton"></div>
      </div>
      <img
        className={`rounded-sm my-3 items-center text-center img ${
          !show ? "shw" : "none"
        }`}
        src={meal.image}
        alt="recipe"
      />

      <ul className="text-gray-700 w-1/2 m-auto text-md h-50">
        <li className="my-2 w-auto">
          <p className="font-bold">Preparation </p>
          <p className="text-gray-600">{meal.readyInMinutes} minuets</p>
        </li>
        <li className="my-2 w-auto">
          <p className="font-bold">Servings </p>
          <p className="text-gray-600">{meal.servings} minuets</p>
        </li>
      </ul>
      <button className="bg-pink-600 hover:text-black text-white font-bold py-1 px-4 rounded mt-1 mb-3">
        <a className="text-center" href={meal.sourceUrl}>
          Go to recipe
        </a>
      </button>
    </div>
  );
};

export default MearlRecipe;
