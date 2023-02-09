import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

// export const getPlanningList = () => (dispatch) => {
//   axios
//     .get("http://sfws01.syncronik.com:8085/auth/get-users/", {
//       headers: {
//         // "Access-Control-Allow-Headers": "Authorization, token",
//         "Access-Control-Allow-Headers":
//           "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,x-xsrf-token,x-csrf-token,If-Modified-Since,Cache-Control,Content-Type, X-Custom-Header, Access-Control-Expose-Headers, Token, Authorization",
//         Accept: "*/*",
//         Authorization: `token 1a0544b238b81eedb48b43e574ce86a48b85c4b6`,
//         token: "1a0544b238b81eedb48b43e574ce86a48b85c4b6",
//       },
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         console.log("rta");
//         console.log(response);
//       }
//     })
//     .catch((err) => console.log("error", err));
// };
