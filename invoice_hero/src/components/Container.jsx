import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import { Suspense, useState } from "react";
import { getorderinfo, getordercount } from "../apicalls";
import ContainerTopbar from "./ContainerTopbar";
import Tablelist from "./Tablelist";

export default function Container({
  chooseheader,
  setchooseheader,
  selectedRowKeys,
  setSelectedRowKeys,
}) {
  const [filter, setfilter] = useState({
    limit: 25,
    searchText: "",
    sortBy: "invoiceDate",
    OrderBy: "desc",
    dateFilter: [null, null],
  });
  // const [limit, setlimit] = useState(25);

  console.log("filter", filter);
  const { data: totalorder } = useQuery(["total-count"], getordercount);
  console.log(totalorder, "totalorder");

  const { data, isLoading, isFetching } = useQuery(
    ["invoice-order", filter],
    getorderinfo,
    { keepPreviousData: true }
  );
  //console.log(data?.data.orderData, "order");

  function onfilterchange(newfilter) {
    setfilter({ ...filter, ...newfilter });
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ContainerTopbar
        // limit={limit}
        // setlimit={setlimit}
        filter={filter}
        totalorder={totalorder}
        onChange={onfilterchange}
      />

      <Tablelist
        // order={data?.data.orderData}
        order={data}
        filter={filter}
        totalorder={totalorder?.data["totalInvoices"]}
        isLoading={isFetching}
        onChange={onfilterchange}
        chooseheader={chooseheader}
        setchooseheader={setchooseheader}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
      />
    </div>
  );
}
