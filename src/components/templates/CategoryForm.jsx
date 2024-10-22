import { useState } from "react"

import styles from "./CategoryForm.module.css"
import { useMutation , useQueryClient } from "@tanstack/react-query"
import { addCategory } from "Services/admin"

function CategoryForm() {
    const queryClient = useQueryClient()
    const [form , setForm ] = useState({name:"", slug:"", icon:""})
    const changeHandler = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    const {mutate , isLoading, error , data} = useMutation(addCategory,
      {onSuccess: ()=>queryClient.invalidateQueries("get-categories")}
    )
    // console.log({isLoading , error , data});
    const submitHandler =(event)=>{
        event.preventDefault()
        if( !form.name || !form.slug || !form.icon ) return;
        mutate(form)
    }

    
  return (
    <form 
      onChange={changeHandler} 
      onSubmit={submitHandler} 
      className={styles.form}  >
        <h3>دسته بندی جدید</h3>
        {!!error && <p>مشکلی پیش آمده است</p>}
        {data?.status === 201 && <p>آگهی با موفقیت اضافه شد</p>}
        <label htmlFor="name">اسم دسته بندی</label>
        <input type="text" name="name" id="name"  />

        <label htmlFor="name">اسلاگ</label>
        <input type="text" name="slug" id="slug"  />

        <label htmlFor="name">آیکون</label>
        <input type="text" name="icon" id="icon"  />

        <button type="submit" disabled={isLoading}>ایجاد</button>
    </form>
  )
}

export default CategoryForm