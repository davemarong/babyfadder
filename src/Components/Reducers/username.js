const usernameReducer = (state = "", action) => {
  if (action.type === "GET_USERNAME") {
    return action.payload;
  } else {
    return state;
  }
};
export default usernameReducer;
