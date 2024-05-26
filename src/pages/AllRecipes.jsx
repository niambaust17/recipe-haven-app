import { useEffect, useState } from "react";
import SingleRecipe from "../components/shared/SingleRecipe";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleDeleteRecipes = (id) =>{
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">All Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recipes.map((recipe) => <SingleRecipe key={recipe.id} recipe={recipe} onDelete={handleDeleteRecipes}/>)}
      </div>
    </div>
    </div>
  );
};

export default AllRecipes;
