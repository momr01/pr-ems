import { apiSlice } from "../../app/api/apiSlice";

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/auth/get-users/",
      // query: () => ({
      //   url: "/auth/get-users/",
      //    method: "GET",
        // Headers: {
        //   Authorization: "token 1a0544b238b81eedb48b43e574ce86a48b85c4b6",
        //   'token': "1a0544b238b81eedb48b43e574ce86a48b85c4b6",
        // },
       // prepareHeaders: (headers) => {
        //const token = getState().auth.token;
       // if (token) {
        // headers.set(
        //   'Authorization',
        //   "token 1a0544b238b81eedb48b43e574ce86a48b85c4b6"
        // );
        // headers.set('token', "1a0544b238b81eedb48b43e574ce86a48b85c4b6");
       // }
        //   return headers;
        // },
        // headers: {
        //   "Access-Control-Allow-Headers":
        //     "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,x-xsrf-token,x-csrf-token,If-Modified-Since,Cache-Control,Content-Type, X-Custom-Header, Access-Control-Expose-Headers, Token, Authorization, token",
        //   Accept: "*/*",
        //   Authorization: `token 1a0544b238b81eedb48b43e574ce86a48b85c4b6`,
        //   token: "1a0544b238b81eedb48b43e574ce86a48b85c4b6",
        // },
     // }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUsersQuery } = usersSlice;
