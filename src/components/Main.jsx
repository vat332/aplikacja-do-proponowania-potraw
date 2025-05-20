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
      <div className="mt-30 mb-8 text-center md:mt-20">
        <h1 className="mb-4 text-3xl font-bold text-[#dd6d48] md:text-4xl dark:text-[#9507ee]">
          Odkryj magiczne połączenia smaków!
        </h1>
        <p className="mx-auto text-lg text-gray-700 md:max-w-[80%] md:text-xl dark:text-gray-300">
          Wpisz składniki które masz w lodówce, a my stworzymy dla Ciebie
          wyjątkowy przepis. Gotowanie nigdy nie było tak proste!
        </p>
      </div>

      <div className="h-20">
        <form
          className="flex justify-center gap-1 md:justify-center"
          action={handleSubmit}
        >
          <div className="w-full rounded-md bg-gradient-to-r from-[#dd6d48] to-[#eea992] p-[2px] dark:from-[#9507ee] dark:to-[#b5b1e7]">
            <input
              type="text"
              placeholder="np. masło, jajka, mąka..."
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

      <div className="mb-10 text-center text-sm text-gray-500 md:mb-4 dark:text-gray-400">
        <p>Dodaj przynajmniej 3 składniki, aby otrzymać najlepsze przepisy</p>
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

      <div className="mt-12 grid-cols-3 gap-6 md:grid">
        <div className="mb-5 rounded-lg bg-white/80 p-4 text-center shadow-md dark:bg-gray-800/80">
          <h3 className="mb-2 text-lg font-semibold text-[#dd6d48] dark:text-[#b5b1e7]">
            ⚡ Szybko
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Przepisy w mniej niż 30 sekund
          </p>
        </div>
        <div className="mb-5 rounded-lg bg-white/80 p-4 text-center shadow-md dark:bg-gray-800/80">
          <h3 className="mb-2 text-lg font-semibold text-[#dd6d48] dark:text-[#b5b1e7]">
            🍎 Zdrowo
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Zrównoważone kombinacje składników
          </p>
        </div>
        <div className="mb-5 rounded-lg bg-white/80 p-4 text-center shadow-md dark:bg-gray-800/80">
          <h3 className="mb-2 text-lg font-semibold text-[#dd6d48] dark:text-[#b5b1e7]">
            🧑‍🍾 Profesjonalnie
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Porady od sztucznej inteligencji
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
