import { useEffect, useRef, useState } from "react";
import getRecipeAi from "../ai";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import Loader from "./Loader";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      const yCoord = recipeSection.current.getBoundingClientRect().top;
      window.scrollTo({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [recipe]);
  const handleSubmit = (formData) => {
    setIngredients((prev) => [...prev, formData.get("ingredient")]);
  };
  const removeIngredient = (ingredientToRemove) => {
    setIngredients((prev) => prev.filter((i) => i !== ingredientToRemove));
  };
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);
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
    <main className="mx-auto max-w-[90vw] px-4 py-8 md:w-[60vw] md:pt-20">
      <div className="h-40">
        <form
          className="flex justify-center gap-1 md:justify-center"
          action={handleSubmit}
        >
          <div className="w-full rounded-md bg-gradient-to-r from-[#dd6d48] to-[#eea992] p-[2px] dark:from-[#9507ee] dark:to-[#b5b1e7]">
            <input
              type="text"
              placeholder="masło"
              aria-label="Dodaj składnik"
              name="ingredient"
              className="w-full rounded-md border-none bg-white p-3 font-bold text-[#212020] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-[#dd6d48] p-1 px-4 font-bold text-white hover:opacity-70 focus:outline-none dark:bg-[#9507ee]"
          >
            Dodaj składnik
          </button>
        </form>
      </div>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          removeIngredient={removeIngredient}
          ref={recipeSection}
        />
      )}
      <Loader />
      {isLoading && <Loader isLoading={isLoading} />}
      {!isLoading && recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
