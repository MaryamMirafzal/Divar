import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getCategory } from "Services/admin"

import styles from "./AddPost.module.css"
import { getCookie } from "utils/cookie"
import axios from "axios"
import toast from "react-hot-toast"

function AddPost() {
    const [ form, setForm ] = useState({
        title: "",
        content: "",
        category: "",
        city: "",
        amount: "",
        images: null,
    })
    const { data } = useQuery(["get-categories"], getCategory)
    
    const addHandler = (event) => {
        event.preventDefault()
        const formData = new FormData();
        for (let i in form) {
            if (i === "images" && form[i]) {
                Array.from(form[i]).forEach(file => formData.append("images", file))
            } else {
                formData.append(i, form[i])
            }
        }
        const token = getCookie("accessToken")

        axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => toast.success(res.data.message))
        .catch((error) => console.log(error))
    }

    const changeHandler = (event) => {
        const { name, value, files } = event.target
        setForm({
            ...form,
            [name]: name === "images" ? files : value
        })
    }

    return (
        <form onSubmit={addHandler} onChange={changeHandler} className={styles.form}>
            <h3>افزودن آگهی</h3>
            <label htmlFor="title">عنوان</label>
            <input type="text" name="title" id="title"/>
            
            <label htmlFor="content">توضیحات</label>
            <textarea name="content" id="content"/>

            <label htmlFor="amount">مبلغ</label>
            <input type="number" name="amount" id="amount"/>

            <label htmlFor="city">شهر</label>
            <input type="text" name="city" id="city"/>

            <label htmlFor="category">دسته بندی</label>
            <select name="category" id="category">
                {data?.data.map((i) => 
                    <option key={i._id} value={i._id}>
                        {i.name}
                    </option>
                )}
            </select>

            <label htmlFor="images">عکس</label>
            <input type="file" name="images" id="images" multiple />

            <button type="submit">ایجاد</button>
        </form>
    )
}

export default AddPost