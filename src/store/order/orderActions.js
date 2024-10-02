import { toast } from "react-toastify";
import {
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
} from "./orderActionTypes";
import { GetOrderDetails } from "../../services";

import api from "../../components/ApiConfig";
import { Apis } from "../../config";
import { getCookie } from "../../function";
import { NotificationManager } from "react-notifications";

const token = getCookie("token");
export const fetchOrderRequest = (newCart) => {
  if (newCart.addressId === null) {
    NotificationManager.error("Please! select address from the list");
    return {
      type: FETCH_ORDER_REQUEST,
      payload: false,
    };
  } else {
    return {
      type: FETCH_ORDER_REQUEST,
      payload: true,
    };
  }
};

const fetchOrderSuccess = (order) => {
  if (order.code === 200) {
    order.message
      ? toast.success(`"${order.message}"`, { theme: "colored" })
      : null;
    return {
      type: FETCH_ORDER_SUCCESS,
      payload: order,
    };
  }
};

const fetchOrderFailure = (error) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error,
  };
};
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const CreateOrderDetail = (newCart) => {
  return async (dispatch) => {
    let checkItem = dispatch(fetchOrderRequest(newCart));
    if (checkItem.payload && newCart.payment === "card") {
      //payment system
      let orderId =
        "OD" +
        Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      let paymentRes = {
        order_id: orderId,
        amount: newCart.total,
        currency: "INR",
        payment_capture: 1,
      };
      const result = await GetOrderDetails.getPaymentValue(paymentRes);
      if (!result.data) {
        alert("Server error. Are you online?");
        return;
      } else {
        const __DEV__ = document.domain === "localhost";
        let options = {
          key: __DEV__ ? "rzp_test_s2VG2G2HwcOQd6" : "rzp_test_s2VG2G2HwcOQd6",
          currency: result.data.currency,
          amount: result.data.amount * 100,
          order_id: result.data.id,
          name: "Jaivik Foundation",
          description: "Test Transaction",
          image: "https://jaivikphoto.s3.ap-south-1.amazonaws.com/logo.png",
          handler: async function (response) {
            const result = await GetOrderDetails.getPaymentOrderList(
              response.razorpay_payment_id
            );
            if (result) {
              const finalList = {
                orderId: orderId,
                payment: result.data.method,
                addressId: newCart.addressId,
                shippingPrice: newCart.shippingPrice,
                total: result.data.amount / 100,
                cart: newCart.cart,
                status: result.data.status,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
              };
              await api
                .post(Apis.CreateOrderList, finalList, {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                  },
                })
                .then((response) => {
                  const userdetail = response.data;
                  dispatch(fetchOrderSuccess(userdetail));
                  window.location.href = "/shop/checkout/success";
                  localStorage.removeItem("state");
                })
                .catch((error) => {
                  const errorMsg = error.message;
                  dispatch(fetchOrderFailure(errorMsg));
                });
            }
          },
          prefill: {
            name: "",
            email: "",
            phone_number: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#1f5215",
          },
        };
        let payementObject = new window.Razorpay(options);
        payementObject.open();
      }
    } else {
      if (checkItem.payload) {
        await api
          .post(Apis.CreateOrderList, newCart, {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          })
          .then((response) => {
            const userdetail = response.data;
            setTimeout(() => {
              dispatch(fetchOrderSuccess(userdetail));
              window.location.href = "/shop/checkout/success";
            }, 200);
          })
          .catch((error) => {
            const errorMsg = error.message;
            dispatch(fetchOrderFailure(errorMsg));
          });
      }
    }
  };
};
export const GetOrderHistory = () => {
  return async (dispatch) => {
    await api
      .get(Apis.GetOrderList, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        const userdetail = response.data;
        dispatch(fetchOrderSuccess(userdetail));
      })

      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchOrderFailure(errorMsg));
      });
  };
};
