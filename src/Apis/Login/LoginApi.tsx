import axios from "axios";
import { BASE_URL, header } from "../../Utils/Constant";
import { IApiPayload } from "../../Interface/Interface";

export const LoginApi = async (payload: IApiPayload) => {
  const url = `${BASE_URL}/user/login`;
  try {
    const response = await axios.post(url, JSON.stringify(payload), {
      headers: header,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
