import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient} className="list-ingredients">
      {ingredient}
    </li>
  ));

  const handleSubmit = (formData) => {
    setIngredients((prev) => [...prev, formData.get("ingredient")]);
  };

  const toggleRecipeShown = () => {
    setRecipeShown((prev) => !prev);
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
      {ingredientListItems.length > 0 && (
        <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
};

export default Main;
