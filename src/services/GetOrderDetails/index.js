import api from "../../components/ApiConfig";
import { Apis } from "../../config";
import { NotificationManager } from "react-notifications";
import ApiError from "../../common/ApiError";
import { getCookie } from "../../function";

const getPaymentValue = async (data) => {
  try {
    let result = await api.post(Apis.GetPaymentValue, data);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getPaymentVerification = async () => {
  try {
    let result = await api.post(Apis.GetPaymentVerification);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getPaymentOrderList = async (paymentid) => {
  try {
    let data = {
      razorpay_payment_id: paymentid,
    };
    let result = await api.post(Apis.GetPaymentOrderList, data);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getOrderHistory = async () => {
  try {
    let result = await api.get(Apis.GetOrderList, {
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
export default {
  getPaymentValue,
  getPaymentVerification,
  getPaymentOrderList,
  getOrderHistory,
};
