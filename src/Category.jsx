import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "./api";
import { Preloader } from "./Components/Preloader";
import { MealList } from "./Components/MealList";

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}
