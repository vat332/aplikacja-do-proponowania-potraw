const Main = () => {
  const ingredients = [
    "Kurczak",
    "Cebula",
    "Masło",
    "Czosnek",
    "Papryka",
    "Sól",
  ];
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    ingredients.push(newIngredient);
  };
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
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
