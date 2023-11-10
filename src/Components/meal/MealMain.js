/** @format */

import React, { useState, useRef, useEffect } from "react";
import MealList from "./MealList";

function Carolies() {
  const [err, seterr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(1000);

  const API_KEY = process.env.API_KEY;

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => {
        // 402
        if (response.status === 402) {
          seterr(true);
          setErrMessage(
            `You reached the limit today, You can Try tomorrow or 
             Upgrade your Plan`
          );
          return;
        }

        // 404
        if (response.status === 404) {
          seterr(true);
          setErrMessage(`Something wrong happen, Please try again latar`);
          return;
        }
        //end

        return response.json();
      })
      .then((data) => {
        //add image url to data
        for (let i = 0; i < 3; i++) {
          data.meals[i].image =
            "https://spoonacular.com/recipeImages/" +
            data.meals[i].id +
            "-556x370.jpg";
        }
        setMealData(data);
      })
      .catch((e) => {
        seterr(true);
        setErrMessage(`The limit has been reached today, You can Try tomorrow or 
        Upgrade your Plan`);
      });
  }

  const searchRef = useRef(null);
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div>
      {!err ? (
        <div className="font-fancy md:px-8 px-2 py-2 md:py-6 font-body  bg-white min-h-screen">
          <main className="roundedpx-16 py-16 md:px-8 px-2 bg-white">
            <h3 className="text-gray-800 mb-3 text-center text-3xl">
              Search healthy meals
            </h3>
            <h2 className="text-gray-700 mb-3 text-center">
              Get healthy meal suggestions
            </h2>

            <div className="search mx-auto text-center">
              <input
                className="block shadow-md rounded px-2 pt-2 pb-2 mb-6 mt-6 container md:w-1/3 text-center mx-auto outline-none"
                type="number"
                placeholder="Carolies (e.g. 2000)"
                onChange={handleChange}
                ref={searchRef}
              />
            </div>
            <div className="search mx-auto text-center">
              <label className="text-gray-800 text-lg">
                <button
                  className="bg-pink-300  text-gray-700 font-bold py-1 px-4 rounded "
                  onClick={getMealData}
                >
                  Search
                </button>
                {mealData && <MealList mealData={mealData} />}
              </label>
            </div>
          </main>
        </div>
      ) : (
        <div className="font-fancy md:px-8 px-2 pt-60 md:pt-60 font-body  bg-white min-h-screen">
          <main className="roundedpx-16 py-16 md:px-8 px-2 bg-white">
            <h3 className="text-gray-800 mb-3 text-center text-3xl">
              {errMessage}
            </h3>
          </main>
        </div>
      )}
    </div>
  );
}

export default Carolies;
