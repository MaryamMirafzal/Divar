
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { getCategory, deleteCategory } from "Services/admin";
import styles from "./CategoryList.module.css";

function CategoryList() {
  const queryClient = useQueryClient();

  // Fetch categories
  const { data, isLoading } = useQuery(["get_categories"], getCategory);

  // Mutation for deleting category
  const mutation = useMutation({
    mutationFn: (id) => deleteCategory(id),
    onSuccess: () => {
      // Refetch categories after delete
      queryClient.invalidateQueries(["get_categories"]);
    },
    onError: (error) => {
      console.error("Error deleting category:", error);
      alert("Failed to delete category");
    },
  });

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      mutation.mutate(id);  
    }
  };

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((i) => (
          <div key={i._id} className={styles.list2}>
            <img src={`${i.icon}.svg`} alt={i.name} />
            <h5>{i.name}</h5>
            <p>slug: {i.slug}</p>
            <button onClick={() => deleteHandler(i._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
