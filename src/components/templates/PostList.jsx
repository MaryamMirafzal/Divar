import { useQuery } from "@tanstack/react-query"
import Loader from "components/modules/Loader";
import { getPost } from "Services/user"
import { sp } from "utils/numbers";

const BaseURL = import.meta.env.VITE_BASE_URL;

import styles from "./PostList.module.css"

function PostList() {
    const { data , isLoading } = useQuery(["my-post-list"],getPost)
    console.log(data , isLoading);
  return (
    <div className={styles.list}>
        {isLoading ? <Loader />: (
            <>
              <h3>آگهی های شما</h3>
              {
                data.data.posts.map((post)=>
                    <div key={post.id} className={styles.post}>
                        <img src={`${BaseURL}${post.images[0]}`}/>
                        <div>
                            <p>{post.options.title}</p>
                            <span>{post.options.content}</span>
                        </div>
                        <div className={styles.price}>
                            <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                            <span>{sp(post.amount)} تومان</span>
                        </div>
                    </div>
                )
              }
            </>
        )}
    </div>
  )
}

export default PostList