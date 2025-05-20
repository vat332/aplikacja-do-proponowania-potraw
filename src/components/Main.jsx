import { useEffect, useRef, useState } from "react";
import getRecipeAi from "../ai";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // const yCoord = recipeSection.current.getBoundingClientRect().top;
      // window.scrollTo({
      //   top: yCoord,
      //   behavior: "smooth",
      // });
    }
  }, [recipe]);
  const handleSubmit = (formData) => {
    setIngredients((prev) => [...prev, formData.get("ingredient")]);
  };
  const removeIngredient = (ingredientToRemove) => {
    setIngredients((prev) => prev.filter((i) => i !== ingredientToRemove));
  };

  const getRecipe = async () => {
    setIsLoading(true);
    try {
      const generatedRecipe = await getRecipeAi(ingredients);
      setRecipe(generatedRecipe);
    } catch (error) {
      console.error("Błąd podczas generowania przepisu:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <p className="text-3xl">test</p>
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          type="text"
          placeholder="masło"
          aria-label="Dodaj składnik"
          name="ingredient"
          className="input-ingredient"
        />
        <button type="submit">Dodaj składnik</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          removeIngredient={removeIngredient}
          ref={recipeSection}
        />
      )}
      {isLoading && <p className="loader">Generowanie przepisu...</p>}
      {!isLoading && recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
