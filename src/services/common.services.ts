import _ from "lodash";
import { axiosApi } from "@/configs/axiosApi.config";
import { isAxiosError } from "axios";

const commonServices = {
  async requestDemoSchedule(data: any) {
    try {
      const res = await axiosApi.post(`/support/request-demo`, data);
      return res;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },

  async onPostFeedback(data: any) {
    try {
      const res = await axiosApi.post(`/support/user-feedback`, data);
      return res;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
};

export default commonServices;
