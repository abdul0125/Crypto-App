import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '672d90924fmshacc53997806001ep176651jsn0f6a1d685bc5',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest=(url)=>({
    url,headers:cryptoNewsApiHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints:(builder)=>({
        getCryptosNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            // query:({newsCategory,count})=>createRequest(`/`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;