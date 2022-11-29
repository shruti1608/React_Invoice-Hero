import { useQuery } from "@tanstack/react-query";
import { getordercount } from "../apicalls";

export default function Ordercount({ style, totalorder }) {
  // const { data } = useQuery(["invoice"], getordercount);

  return (
    <div style={style}>
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginRight: "1rem",
        }}
      >
        {totalorder?.data["totalInvoices"]} Invoices
      </span>
    </div>
  );
}
