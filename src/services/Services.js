import axiosInstance, { operation } from './axios'

/** Register the user after Verifying the OTP `POST: /api/auth/register/` */
export const getAllServices = async () => {
   try {
      const res = await axiosInstance.get(`/service/list`)
      return { res: res, err: null }
   } catch (error) {
      return { err: error, res: null }
   }
}