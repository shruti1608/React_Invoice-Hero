import axios from "axios";

//const token = process.env.REACT_APP_TOKEN;

const axiosUrl = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      process.env.REACT_APP_ENV === "local"
        ? process.env.REACT_APP_TOKEN
        : null,
  },
});

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wTmFtZSI6InRlY2tpZS1zdXBwbGllcy00Lm15c2hvcGlmeS5jb20ifQ.c20g1P39f2XmfgFg_ZxOlzylhhcnyXvvD3shbdPJVt0";

export const getshopinfo = () => {
  return axiosUrl.get("/api/shop", {
    // headers: { Authorization: `Bearer ${token}` },
  });
};

export const getordercount = () => {
  return axiosUrl.get("/api/order/count", {
    //headers: { Authorization: `Bearer ${token}` },
  });
};

export const getorderinfo = ({
  queryKey: [
    ,
    {
      searchText,
      limit,
      page,
      sortBy,
      OrderBy,
      dateFilter: [startDateTmp, endDateTmp] = [],
      paymentStatus,
      fulfillmentStatus,
      mail,
      orderStatus,
    },
  ],
}) => {
  //console.log(limit, startDate, "apical");

  let startDate = null;
  let endDate = null;

  if (startDateTmp) {
    startDate = new Date(startDateTmp.format());
    startDate.setHours(0, 0, 0, 0);
  }

  if (endDateTmp) {
    endDate = new Date(endDateTmp.format());
    endDate.setHours(23, 59, 59, 999);
  }
  return axiosUrl
    .get("/api/order", {
      //headers: { Authorization: `Bearer ${token}` },
      params: {
        startDate: startDate?.toUTCString() || undefined,
        endDate: endDate?.toUTCString() || undefined,
        paymentStatus: paymentStatus || undefined,
        fulfillmentStatus: fulfillmentStatus || undefined,
        mail: mail || undefined,
        orderStatus: orderStatus || undefined,
        searchText: searchText ? searchText : "",
        OrderBy: OrderBy ? OrderBy : "desc",
        sortBy: sortBy ? sortBy : "invoiceDate",
        limit: limit ? limit : 25,
        pageNo: page ? page : 1,
      },
    })
    .then((res) =>
      res.data.orderData.map((order) => ({ ...order, key: order.orderId }))
    );
};

export const getsettingsinfo = () => {
  return axiosUrl.get("/api/settings", {
    //headers: { Authorization: `Bearer ${token}` },
  });
};

export const mergedpdfcall = ([ids]) => {
  const data = { ids: ids };
  return axiosUrl
    .post("/api/order/bulk/print", data, {
      //headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res.data;
    });
};

export const invoicetocustomer = ([ids]) => {
  const data = { ids: ids };
  return axiosUrl
    .post("/api/order/bulk/send", data, {
      // headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res.data;
    });
};

export const invoicetome = ([ids]) => {
  const data = { ids: ids };
  return axiosUrl
    .post("/api/order/bulk", data, {
      // headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res.data;
    });
};

export const currenysettings = ([value]) => {
  const data = { invoiceSettings: { generateInvoiceOn: value } };
  return axiosUrl.put("/api/settings", data).then((res) => {
    return res.data;
  });
};

export const getcurrenysettings = () => {
  return axiosUrl.get("/api/settings").then((res) => {
    return res.data;
  });
};
