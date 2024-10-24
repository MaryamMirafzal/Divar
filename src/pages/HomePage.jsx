import { useQuery } from "@tanstack/react-query"
import Main from "components/templates/Main"
import SideBar from "components/templates/SideBar"
import { getAllPost } from "Services/user"
import Loader from "components/modules/Loader"
import { getCategory } from "Services/admin"

function HomePage() {
  const { data:posts , isLoading: postLoading } = useQuery(["post-list"], getAllPost)
  const { data:categories , isLoading: categoryLoaing} = useQuery(["get-categories"], getCategory)
  return (
    <div >
    {
      postLoading || categoryLoaing ? (<Loader />):
      (<div style={{display:"flex"}}>
        <SideBar  categories={categories}/>
        <Main posts={posts} />
      </div>)
    } 
    </div>   
  )
}

export default HomePage