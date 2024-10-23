
import styles from "./SideBar.module.css"

function SideBar({categories}) {
    
  return (
    <div className={styles.Sidebar}>
        <h4>دسته بندی ها</h4>
        <ul>
            {
                categories?.data.map( category =>
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