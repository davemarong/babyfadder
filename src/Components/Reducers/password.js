const passwordReducer = (state = "", action) => {
  if (action.type === "GET_PASSWORD") {
    return action.payload;
  } else {
    return state;
  }
};
export default passwordReducer;
