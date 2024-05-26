import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditRecipe = () => {

    const recipe = useLoaderData();

    const [title, setTitle] = useState(recipe.title);
    const [author, setAuthor] = useState(recipe.author);
    const [instructions, setInstructions] = useState(recipe.instructions);
    const [description, setDescription] = useState(recipe.description);
    const [image_url, setImage_url] = useState(recipe.image_url);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [id, setID] = useState(recipe.id);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = e.target;
  
      const id = form.id.value;
        const title = form.title.value;
        const author = form.author.value;
        const instructions = form.instructions.value;
        let ingredients = form.ingredients.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
        ingredients = ingredients.split(',');

  
        const data ={id, title, author, instructions, ingredients, description, image_url};

        console.log(data);
  
      const isConfirmed = window.confirm(
        "Are you sure you want to edit this recipe?"
      );
  
      if (isConfirmed) {
        await fetch(`http://localhost:3000/recipes/${data.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            alert("Recipe updated successfully!");
          });
      } else {
        alert("Recipe update cancelled.");
      }
    };
      return (
        <div>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white">
          <h2 className="text-2xl font-bold mb-6">Edit Recipe</h2>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
            onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={author}
            onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="instructions"
              placeholder="Instructions"
              value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
            onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="id"
              placeholder="ID"
              value={id}
            onChange={(e) => setID(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Edit Recipe
          </button>
        </form>
        </div>
      )
    }
    
    export default EditRecipe
    
