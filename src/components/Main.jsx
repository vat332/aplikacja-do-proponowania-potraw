import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient} className="list-ingredients">
      {ingredient}
    </li>
  ));

  const handleSubmit = (formData) => {
    setIngredients((prev) => [...prev, formData.get("ingredient")]);
  };
  return (
    <main>
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          type="text"
          placeholder="masło"
          aria-label="Dodaj składnik"
          name="ingredient"
        />
        <button type="submit">Dodaj składnik</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
  );
};

export default Main;
