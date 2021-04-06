const isloggedReducer = (state = false, action) => {
  if (action.type === "LOG_IN") {
    return !state;
  } else {
    return state;
  }
};

export default isloggedReducer;
