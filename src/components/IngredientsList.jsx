const IngredientsList = (props) => {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li
      key={ingredient}
      className="mx-4 my-1 flex items-center justify-center gap-2 font-bold capitalize"
    >
      {ingredient}
      <button
        className="cursor-pointer rounded-md bg-[#dd6d48] p-1 px-2 font-bold text-white hover:opacity-70 focus:outline-none dark:bg-[#9507ee]"
        onClick={() => props.removeIngredient(ingredient)}
        aria-label={`Usuń składnik ${ingredient}`}
      >
        ✕
      </button>
    </li>
  ));

  return (
    <section className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-[#FAFAFA] p-6 shadow-lg shadow-gray-200 dark:bg-[#272d53] dark:shadow-gray-800">
      <h2 className="text-center text-4xl font-bold text-[#212020] dark:text-white">
        Lista składników
      </h2>

      <ul aria-live="polite" className="w-full max-w-xl space-y-2">
        {ingredientListItems}
      </ul>

      <div
        ref={props.ref}
        className="mt-4 flex w-full max-w-xl flex-col items-center gap-2 text-center"
      >
        <h3 className="text-2xl font-bold text-[#212020] dark:text-white">
          Gotowy na przepis?
        </h3>
        <p className="text-[#444] dark:text-gray-300">
          Wygeneruj przepis na podstawie składników
        </p>

        <button
          onClick={props.getRecipe}
          className="mt-2 rounded-md bg-[#dd6d48] px-6 py-2 font-bold text-white hover:opacity-80 focus:outline-none dark:bg-[#9507ee]"
        >
          Generuj przepis
        </button>
      </div>
    </section>
  );
};

export default IngredientsList;
