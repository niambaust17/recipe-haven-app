/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleRecipe = ({ recipe, onDelete }) => {
  const { id, title, image_url, author, ingredients, description } = recipe;

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (isConfirmed) {
      await fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Recipe deleted successfully!");
          onDelete(id);
        });
    } else {
      alert("Recipe deletion cancelled.");
    }
  };

  return (
    <div key={recipe} className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image_url} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700">Author: {author}</p>
        <p className="text-gray-600">Ingredients: {ingredients?.length}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
          <Link
            className="btn btn-outline btn-sm btn-primary mr-2"
            to={`/recipes/${id}`}
          >
            Details
          </Link>

          <Link
            className="btn btn-outline btn-sm btn-warning mr-2"
            to={`edit/${id}`}
          >
            Edit
          </Link>

          <button
            onClick={handleDelete}
            className="btn btn-outline btn-sm btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
