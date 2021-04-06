const emailReducer = (state = "", action) => {
  if (action.type === "GET_EMAIL") {
    return action.payload;
  } else {
    return state;
  }
};
export default emailReducer;
