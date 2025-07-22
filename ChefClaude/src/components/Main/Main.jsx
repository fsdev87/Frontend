import { useState, useRef } from "react";
import "./Main.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import getRecipeFromMistral from "../../AI";

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

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

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
          getRecipe={getRecipe}
          ingredients={ingredients}
          ref={recipeSection}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
