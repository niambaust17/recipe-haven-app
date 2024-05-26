import { useLoaderData } from "react-router-dom"
import Banner from "../components/home/Banner"
import Blog from "./Blog"
import Recipes from "./Recipes"

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner/>
      <Recipes data={data}/>
      <Blog/>
    </div>
  )
}

export default Home
