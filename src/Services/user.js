import api from "configs/api"

const getProfile = async ()=>{
   await api.get("user/whoami")
}


export { getProfile }