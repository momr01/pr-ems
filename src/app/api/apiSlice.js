import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import url from "../../helpers/url";

const baseQuery = fetchBaseQuery({
  baseUrl: url.backend.main,
  //credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `token ${token}`);
      headers.set("token", `${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
