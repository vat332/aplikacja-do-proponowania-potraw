const IngredientsList = (props) => {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient} className="list-ingredient">
      {ingredient}
      <button
        className="remove-btn"
        onClick={() => props.removeIngredient(ingredient)}
        aria-label={`Usuń składnik ${ingredient}`}
      >
        ✕
      </button>
    </li>
  ));

  return (
    <section>
      <h2>Lista składników</h2>
      <ul aria-live="polite">{ingredientListItems}</ul>
      <div className="get-recipe-container">
        <div>
          <h3>Gotowy na przepis?</h3>
          <p>Wygeneruj przepis na podstawie składników</p>
        </div>
        <button onClick={props.getRecipe}>Generuj przepis</button>
      </div>
    </section>
  );
};

export default IngredientsList;
