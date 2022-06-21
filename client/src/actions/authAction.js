import axios from "axios";
import { server_url } from "../config";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${server_url}/user/register`, user)
      .then((token) => {
        localStorage.setItem("token", JSON.stringify(token.data));

        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
      })

      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${server_url}/user/login`, { email, password })
      .then(async (token) => {
        localStorage.setItem("token", JSON.stringify(token.data));
        console.log(token);
        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token?.token || getState().auth.token;
    console.log(token);
    if (token) {
      axios
        .get(`${server_url}/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (token) {
            dispatch({
              type: "USER_LOADED",
              user: {
                token,

                ...res.data.data,
                loaded: true,
              },
            });
          } else {
            console.log("nono");
            return null;
          }
        });
    } else {
      const auth = getState().auth;
      if (!auth.loaded)
        dispatch({
          type: "USER_LOGGED_OUT",
          user: {
            ...auth,
            loaded: true,
          },
        });
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};

//   export const updateUser = (user, navigate) => {
//     return (dispatch, getState) => {
//       const token = getState().auth.token;
//       console.log(token);
//       if (token) {
//         axios
//           .patch(`${server_url}/user/me`, user, {
//             headers: { Authorization: `Bearer ${token}` },
//           })
//           .then((res) => {
//             console.log(res);

//             dispatch({
//               type: "USER_UPDATED",
//               user: {
//                 ...getState().auth,
//                 ...user,
//               },
//             });
//             navigate("/");
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       }
//     };
//   };
