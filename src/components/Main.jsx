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
      {ingredientListItems.length > 0 && (
        <section>
          <h2>Lista składników</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientListItems}
          </ul>
          <div className="get-recipe-container">
            <div>
              <h3>Gotowy na przepis?</h3>
              <p>Wygeneruj przepis na podstawie składników</p>
            </div>
            <button>Generuj przepis</button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Main;
