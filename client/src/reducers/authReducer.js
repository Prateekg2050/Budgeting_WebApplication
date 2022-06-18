const initialState = {
  token: JSON.parse(localStorage.getItem("token")),
  email: null,
  phoneNumber: null,
  _id: null,
  loaded: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
      // const user = jwtDecode(action.token);
      const { user } = action.token.data;
      return {
        ...user,
        token: action.token.token,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");

      return {
        loaded: true,
        token: null,
        email: null,
        phoneNumber: null,
        _id: null,
      };
    case "USER_UPDATED":
    case "USER_LOADED":
      const data = action.user;
      return data;
    case "USER_LOGGED_OUT":
      return action.user;
    // case "KYC_UPDATED":
    //   const
    default:
      return state;
  }
};

export default authReducer;
