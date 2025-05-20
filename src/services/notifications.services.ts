import { isAxiosError } from "axios";
import { axiosApi } from "@/configs/axiosApi.config";

const notificationServices = {
  getNotifications: async (userId: string) => {
    try {
      const res = await axiosApi.get(`user/${userId}/notifications`);
      return res.data;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  //   markAsRead: async (notificationId: string) => {
  //     try {
  //       const res = await axiosApi.put(`notifications/${notificationId}`);
  //       return res.data;
  //     } catch (error: any) {
  //       if (isAxiosError(error)) {
  //         throw new Error(error.response?.data.message);
  //       }
  //       throw new Error("Something went wrong. Please try again.");
  //     }
  //   },
};

export default notificationServices;
