import api from "configs/api"

// const getProfile = async ()=>{
//    await api.get("user/whoami").then(res => res || false)
// }

const getProfile = async () => {
   try {
      const res = await api.get("user/whoami");
      return res?.data || false; // اگر `res.data` خالی یا undefined بود، false برگردان
   } catch (error) {
      console.error("Error fetching profile:", error); // لاگ کردن خطا
      return false; // در صورت بروز خطا مقدار false برگردان
   }
};

const getPost = async ()=>await api.get("post/my")


export { getProfile, getPost }