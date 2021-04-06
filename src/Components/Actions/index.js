export const log_in = () => {
  return {
    type: "LOG_IN",
  };
};
export const get_password = (password) => {
  return {
    type: "GET_PASSWORD",
    payload: password,
  };
};
export const get_username = (username) => {
  return {
    type: "GET_USERNAME",
    payload: username,
  };
};
export const get_email = (email) => {
  return {
    type: "GET_EMAIL",
    payload: email,
  };
};
