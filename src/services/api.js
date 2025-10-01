import { fetchBaseQuery } from "@reduxjs/toolkit/query";
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
baseQuery:fetchBaseQuery({
  baseUrl:"http://localhost:3000"
}),
  endpoints: (builder) => ({
    staticText: builder.query({
      query: () => ({
        url: "/text",
        method: "GET",
      }),
    }),
    funds:builder.query({
     query:()=>({
      url:'/funds',
      method:'GET'
     })
    }),
    stats:builder.query({
      query:()=>({
        url:"/stats",
        method:'GET'
      })
    }),
   holdings:builder.query({
      query:()=>({
        url:"/holdings",
        method:'GET'
      })
    }),
    exposure:builder.query({
      query:()=>({
        url:"/exposure",
        method:'GET'
      })
    }),
    performance:builder.query({
      query:()=>({
        url:'/performance',
        method:'GET'
      })
    })
  })
});

export const {
useStaticTextQuery,
useFundsQuery,
useStatsQuery,
useHoldingsQuery,
useExposureQuery,
usePerformanceQuery,
} = api;