import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import url from "../../helpers/url";

const baseQuery = fetchBaseQuery({
  baseUrl: url.backend.main,
  //credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    //const {auth} = getState()
    // console.log(auth)
    if (token) {
      headers.set("Authorization", `token ${token}`);
      headers.set("token", `${token}`);
      //headers.set('Authorization', `token 1a0544b238b81eedb48b43e574ce86a48b85c4b6`);
      //headers.set('token', `1a0544b238b81eedb48b43e574ce86a48b85c4b6`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  // baseQuery: retry(fetchBaseQuery({ baseUrl: url.backend.main }), {
  //   maxRetries: 1,
  // }),
  endpoints: (builder) => ({}),
});
