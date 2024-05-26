const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Recipe Haven</h1>
        <div className="flex justify-center mb-6">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cooking" className="rounded-lg shadow-md w-full h-auto max-w-md" />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Recipe Haven, your ultimate destination for discovering and sharing delicious recipes from around the world. Whether you’re a seasoned chef or a home cook, our platform offers a diverse collection of recipes to inspire your next meal.
        </p>
        <div className="flex justify-center mb-6">
          <img src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=1538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Delicious Food" className="rounded-lg shadow-md w-full h-auto max-w-md" />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to bring together food enthusiasts of all levels to create a vibrant community where culinary creativity thrives. At Recipe Haven, we believe that cooking should be an enjoyable and accessible experience for everyone.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We are committed to providing you with the best user experience, featuring easy-to-follow recipes, detailed instructions, and beautiful photography to guide you along the way. Join us in celebrating the joy of cooking and the art of sharing meals with loved ones.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for being a part of Recipe Haven. Happy cooking!
        </p>
      </div>
    </div>
  )
}

export default About
