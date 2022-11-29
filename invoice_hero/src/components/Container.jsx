import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getorderinfo, getordercount } from "../apicalls";
import ContainerTopbar from "./ContainerTopbar";
import Tablelist from "./Tablelist";

export default function Container() {
  const [filter, setfilter] = useState({});
  const [limit, setlimit] = useState(25);
  console.log("filter", filter);
  const { data: totalorder } = useQuery(["invoice"], getordercount);
  console.log(totalorder, "totalorder");

  const { data } = useQuery(["invoice-order", filter], getorderinfo);
  console.log(data?.data.orderData, "order");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ContainerTopbar
        limit={limit}
        setlimit={setlimit}
        totalorder={totalorder}
        onChange={(filter) => {
          setfilter(filter);
        }}
      />
      <Tablelist
        order={data?.data.orderData}
        limit={limit}
        setlimit={setlimit}
        onChange={(filter) => {
          setfilter(filter);
        }}
      />
    </div>
  );
}
