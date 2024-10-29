import { API_URL } from "./config";

export const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

export const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  const answer = await response;
  console.log(answer);
  return await response.json();
};

// export const getAllCategories = async () => {
//   const response = await fetch(API_URL + "categories.php");

//   // Логирование статуса ответа
//   console.log("Response status:", response.status);

//   if (response.status === 200) {
//     return await response.json();
//   } else {
//     console.warn("Non-JSON response received");
//     const text = await response.text();
//     console.log("Response text:", text); // Выводит HTML или ошибку
//     return null;
//   }
// };

export const getFilteredCategory = async (catNmae) => {
  const response = await fetch(API_URL + "filter.php?c=" + catNmae);
  return await response.json();
};
