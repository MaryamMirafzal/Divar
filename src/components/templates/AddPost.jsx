import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getCategory } from "Services/admin"

function AddPost() {
    const [ form, setForm ] = useState({
        title:"",
        content:"",
        category:"",
        city:"",
        amount:null,
        images:null,
    })
    const {data} = useQuery(["get-categories"], getCategory)

    const addHandler =(event)=>{
        event.preventDefault()
        console.log(form);
    }
    const changeHandler = (event) =>{
        const name = event.target.name
        if(name !== "images"){
            setForm({...form, [name]: event.target.value})
        }else{
            setForm({...form, [name]:event.target.files[0]})
        }
    }
  return (
    <form onChange={changeHandler}>
        <h3>افزودن آگهی</h3>
        <label htmlFor="title">عنوان</label>
        <input type="text" name="title" id="title"/>
        <label htmlFor="content">توضیحات</label>
        <textarea name="content" id="content"/>

        <label htmlFor="amount">مبلغ</label>
        <input type="text" name="amount" id="amount"/>

        <label htmlFor="city">شهر</label>
        <input type="text" name="city" id="city"/>

        <label htmlFor="category">دسته بندی</label>
        <select name="category" id="category">
            {data?.data.map((i)=> 
               <option key={i._id} value={i._id}>
                {i.name}
               </option>
            )}
        </select>

        <label htmlFor="images">عکس</label>
        <input type="file" name="images" id="images"/>

        <button onClick={addHandler}>ایجاد</button>
    </form>
  )
}

export default AddPost