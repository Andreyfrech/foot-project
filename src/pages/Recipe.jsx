import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../Components/Preloader";

export function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log("testtttt");
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>{recipe.strCategory}</h6>
          {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table>
            <thead>
              <th>Ингридиенты</th>
              <th>Количество</th>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5>Видео рецепта</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
