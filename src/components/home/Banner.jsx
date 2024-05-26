const Banner = () => {
  return (
    <div className="hero min-h-[500px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Welcome to Recipe Haven</h1>
      <p className="mb-5 text-xl">Discover, Cook, and Share Amazing Recipes from Around the World</p>
      <button className="btn btn-primary">Explore Recipes</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
