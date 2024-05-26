import { useLoaderData } from "react-router-dom";

const RecipeDetail = () => {
  const data = useLoaderData();
  const {id,title,description,image_url,ingredients, instructions, author, price, brand} = data;
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">{title}</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2">
              <img className="w-full h-auto rounded-md mb-6" src={image_url} alt={title} />
              <p className="text-lg text-gray-700 mb-4">{description}</p>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">Ingredients:</h2>
                <ul className="list-disc list-inside">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 mx-4">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">Instructions:</h2>
                <ol className="list-decimal list-inside">
                  {instructions.match(/\d+\.\s(.*?)(?=\d+\.\s|\.$)/g).map(instruction => instruction.replace(/^\d+\.\s/, '')).map((step, index) => (
                    <li key={index} className="text-gray-700">{step}</li>
                  ))}
                </ol>
              </div>
              <p className="text-gray-700">Author: {author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
