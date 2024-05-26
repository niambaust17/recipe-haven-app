const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Easy Dinner Recipes for Busy Weeknights",
      excerpt: "Discover quick and easy dinner recipes that are perfect for those busy weeknights...",
      imageUrl: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 25, 2024",
    },
    {
      id: 2,
      title: "5 Delicious Vegan Desserts",
      excerpt: "Indulge in these mouth-watering vegan desserts that are both healthy and tasty...",
      imageUrl: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 18, 2024",
    },
    {
      id: 3,
      title: "How to Make the Perfect Pasta",
      excerpt: "Learn the secrets to making perfect pasta every time with our comprehensive guide...",
      imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 11, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={post.imageUrl} alt={post.title} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <p className="text-gray-600 text-sm">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
