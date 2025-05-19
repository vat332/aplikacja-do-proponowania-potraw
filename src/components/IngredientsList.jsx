const IngredientsList = (props) => {
  return (
    <section>
      <h2>Lista składników</h2>
      <ul className="ingredients-list" aria-live="polite">
        {props.ingredientListItems}
      </ul>
      <div className="get-recipe-container">
        <div>
          <h3>Gotowy na przepis?</h3>
          <p>Wygeneruj przepis na podstawie składników</p>
        </div>
        <button onClick={props.toggleRecipeShown}>Generuj przepis</button>
      </div>
    </section>
  );
};

export default IngredientsList;
