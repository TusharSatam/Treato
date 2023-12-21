import axiosInstance from './axios'
import { toFormData } from 'axios'

/** Register the user after Verifying the OTP `POST: /api/auth/register/` */
export const updateUser = async (userJWT,data) => {
   try {
      const res = await axiosInstance.patch(`profile/update`,toFormData(data),{
         headers: {
         'token': userJWT
         }
       })
      console.log("errrror", res);
      return { res: res, err: null }
   } catch (error) {
      return { err: error, res: null }
   }
}

