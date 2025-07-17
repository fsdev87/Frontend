import { useState } from "react";
import "./Main.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";

export default function Main() {
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      if (!ingredients.includes(newIngredient)) {
        setIngredients((prevIngredients) => [
          ...prevIngredients,
          newIngredient,
        ]);
      } else {
        alert("Ingredient already exists");
      }
    } else {
      alert("Ingredient cannot be empty");
    }
  }

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

  const [recipeShown, setRecipeShown] = useState(false);

  const [ingredients, setIngredients] = useState([]);

  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          toggleRecipeShown={toggleRecipeShown}
          ingredients={ingredients}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
