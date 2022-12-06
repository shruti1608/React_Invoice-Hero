import { useQuery } from "@tanstack/react-query";
import { getshopinfo } from "../apicalls";
import Ordercount from "../components/ordercount.jsx";
import Searchbar from "../components/Searchbar";

export default function ContainerTopbar({
  onChange,
  filter,
  // limit,
  // setlimit,
  totalorder,
}) {
  const { data } = useQuery(["invoice"], getshopinfo);
  console.log(data, "shopinfo");
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "10rem",
          marginRight: "10rem",
          marginTop: "2.5rem",
        }}
      >
        <Ordercount style={{ alignSelf: "center" }} totalorder={totalorder} />
        <Searchbar
          onChange={onChange}
          filter={filter}

          // limit={limit} setlimit={setlimit}
        />
      </div>
    </div>
  );
}
