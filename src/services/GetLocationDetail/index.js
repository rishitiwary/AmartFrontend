import api from "../../components/ApiConfig";
import { Apis } from "../../config";
import { NotificationManager } from "react-notifications";
import ApiError from "../../common/ApiError";
import { getCookie } from "../../function";

const getLocationListDetails = async () => {
  try {
    let result = await api.get(Apis.GetLocationListDetails, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    });
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    ApiError(error);
  }
};
const createAddress = async (data) => {
  try {
    let result = await api.post(Apis.CreateAddress, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    });
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    ApiError(error);
  }
};
const checkPincode = async (zipcode) => {
  try {
    let data = { zipcode: zipcode };
    let result = await api.post(Apis.CheckPincode, data);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    ApiError(error);
  }
};
const getBrandList = async () => {
  try {
    let result = await api.get(Apis.GetBrandList);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    ApiError(error);
  }
};
export default {
  getLocationListDetails,
  createAddress,
  checkPincode,
  getBrandList,
};
