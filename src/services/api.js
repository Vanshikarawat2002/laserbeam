import { createApi } from "@reduxjs/toolkit/query/react";

// const BASE_URL = import.meta.env.VITE_LOGIN_BASEURL;

// const rawBaseQuery = fetchBaseQuery({
//   baseUrl: "https://farsiElectronicNode.visionvivante.in",
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().common.token;
//     if (token) {
//       headers.set("x-access-token", token);
//     }
//     return headers;
//   },
// });

// const baseQueryWithAuth = async (args, api, extraOptions) => {
//   const result = await rawBaseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     api.dispatch(updateAuthTokenRedux({ token: null }));
//     localStorage.removeItem("token");
//   }

//   return result;
// };

export const api = createApi({
  reducerPath: "api",
 baseUrl: "https://farsiElectronicNode.visionvivante.in",
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: credentials,
      }),
    })
  })
});

export const {

} = api;