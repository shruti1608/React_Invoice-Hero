import axios from "axios";

const axiosUrl = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wTmFtZSI6InRlY2tpZS1zdXBwbGllcy00Lm15c2hvcGlmeS5jb20ifQ.c20g1P39f2XmfgFg_ZxOlzylhhcnyXvvD3shbdPJVt0";

export const getshopinfo = () => {
  return axiosUrl.get("/api/shop", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getordercount = () => {
  return axiosUrl.get("/api/order/count", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// export const getorderinfo = () => {
//   return axiosUrl.get(
//     "/api/order?searchText=&OrderBy=desc&sortBy=invoiceDate&limit=25&pageNo=1",
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   );
// };

// export const getorderinfo = ({
//   queryKey: [, { searchText, limit, page, sortBy, OrderBy }],
// }) => {
//   console.log(limit, "apical");
//   return axiosUrl.get(
//     `/api/order?searchText=${searchText ? searchText : ""}&OrderBy=${
//       OrderBy ? OrderBy : "desc"
//     }&sortBy=${sortBy ? sortBy : "invoiceDate"}&limit=${
//       limit ? limit : 25
//     }&pageNo=${page ? page : 1}`,
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   );
// };

export const getorderinfo = ({
  queryKey: [
    ,
    { searchText, limit, page, sortBy, OrderBy, startDate, endDate },
  ],
}) => {
  console.log(limit, startDate, "apical");
  return axiosUrl.get("/api/order", {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      startDate: startDate || undefined,
      endDate: endDate || undefined,
      searchText: searchText ? searchText : "",
      OrderBy: OrderBy ? OrderBy : "desc",
      sortBy: sortBy ? sortBy : "invoiceDate",
      limit: limit ? limit : 25,
      pageNo: page ? page : 1,
    },
  });
};

export const getsettingsinfo = () => {
  return axiosUrl.get("/api/settings", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
