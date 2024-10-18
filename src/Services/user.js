import api from "configs/api"
import { getCookie } from "utils/cookie"

const token = getCookie("accessToken")

const getProfile = async ()=>{
   await api.get("user/whoami", { headers: {Authorization: `bearer ${token}`} })
}


export { getProfile }