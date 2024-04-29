import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseUrl = process.env.REACT_APP_API_URL;

export const dataApi = createApi({
  reducerPath: 'data',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => `static/test.json`
    })
  })
})

export const { useGetDataQuery } = dataApi;