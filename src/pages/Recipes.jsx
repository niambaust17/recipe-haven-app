import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Recipes = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const recipesToShow = data.slice(0, 3);
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipesToShow.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={recipe.image_url} alt={recipe.title} />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
                <p className="text-gray-700 mb-4">{recipe.description}</p>
                <p className="text-gray-700">Author: {recipe.author}</p>
                <p className="text-gray-600">Ingredients: {recipe.ingredients.length}</p>
                <button className="btn btn-outline btn-sm btn-primary mt-4"><Link to={`/recipes/${recipe.id}`}>Recipe Details</Link></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recipes
