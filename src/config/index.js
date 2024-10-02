const API_URL =
  document.domain === "localhost"
    ? "http://localhost:4000"
    : "http://localhost:4000";
const CALLBACK_URL = window.location.origin;
const Apis = {
  //Authentication api
  GetUserGoogleLogin: `${API_URL}/api/customer/google?callbackURL=${CALLBACK_URL}`,
  GetCustomerDetails: `${API_URL}/api/customer/getUserByEmailId`,
  GetUserLogin: `${API_URL}/api/customer/rootLogin`,
  GetUserRegister: `${API_URL}/api/customer/register`,
  GetForgetPassword: `${API_URL}/api/customer/forget-password`,
  GetCustomerResetPassword: `${API_URL}/api/customer/reset-password`,
  GetCustomerEmailVerify: `${API_URL}/api/customer/email-verify`,
  GetAddNewAddress: `${API_URL}/api/customer/add-new-address`,

  //zone
  GetLocationListDetails: `${API_URL}/api/location/list`,
  CreateAddress: `${API_URL}/api/website/address/create`,
  GetCollection: `${API_URL}/api/website/collection/list`,
  CheckPincode: `${API_URL}/api/website/verify-pincode`,

  //order
  CreateOrderList: `${API_URL}/api/website/order/create`,
  GetOrderList: `${API_URL}/api/website/order/history`,
  GetCustomerOrderedProduct: `${API_URL}/api/website/order/product_list`,
  GetCustomerProductDetail: `${API_URL}/api/website/order/product_detail`,
  GetCancelOrderByProduct: `${API_URL}/api/website/order/cancel-by-product`,
  GetDeleteProduct: `${API_URL}/api/customer/delete-address`,

  //profile
  UpdateProfile: `${API_URL}/api/customer/update`,

  //Razarpayment
  GetPaymentValue: `${API_URL}/api/payment/orders`,
  GetPaymentVerification: `${API_URL}/api/payment/verification`,
  GetPaymentOrderList: `${API_URL}/api/payment/card-detail`,

  //brand list
  GetBrandList: `${API_URL}/api/website/brand-list`,
};
export { API_URL, Apis };
