const AddRecipe = () => {

    const handleSubmit = async (e) =>{
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
        // console.log(data);
        const isConfirmed = window.confirm("Are you sure you want to add this recipe?");
    
        if (isConfirmed) {
        await fetch("http://localhost:3000/recipes", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            form.reset();
            alert("Recipe added successfully!");
        });}
        else{
            alert("Recipe addition cancelled.");
        }
    }
      return (
        <div>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white">
          <h2 className="text-2xl font-bold mb-6">Add New Recipe</h2>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="author"
              placeholder="Author"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="instructions"
              placeholder="Instructions"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients[Use , for next]"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="id"
              placeholder="ID"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
        </form>
        </div>
      )
    }
    
    export default AddRecipe
    