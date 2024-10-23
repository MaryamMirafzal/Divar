import { useQuery } from "@tanstack/react-query"
import { getCategory } from "Services/admin"

function SideBar() {
    const { data } = useQuery(["get-categories"], getCategory)
  return (
    <div>
        <h4>دسته بندی ها</h4>
        <ul>
            {
                data?.data.map( category =>
                    <li key={category.id}>
                        <img src={`${category.icon}.svg`} />
                        <p>{category.name}</p>
                    </li>)
            }
        </ul>
    </div>
  )
}

export default SideBar