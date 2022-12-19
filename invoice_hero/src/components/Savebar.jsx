import { Button, Divider, notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import invoiceHero from "../images/invoiceHero.png";
import { currenysettings } from "../apicalls";

export default function Savebar({
  setsavebar,
  value,
  setValue,
  rvalue,
  style,
  loading,
}) {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.open({
      message: "Saved Successfully",
      placement,
      style: { backgroundColor: "pink" },
    });
  };

  // const currencyformat = useMutation(currenysettings);

  // function onsave() {
  //   console.log("r-valuer", value);
  //   currencyformat.mutate([value]);

  //   openNotification("bottom");

  //   setsavebar(false);
  // }

  // function ondiscard() {
  //   currencyformat.mutate([rvalue]);
  //   //console.log("r-valuer", value, rvalue);
  //   setValue(rvalue);

  //   setsavebar(false);
  //   openNotification("bottom");

  // }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "1rem",
          marginRight: "1rem",
          fontFamily: "sans-serif",
          fontSize: "1rem",
          color: "#4d5055",
          ...style,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={invoiceHero} />
          <span
            style={{
              alignSelf: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Invoice Hero
          </span>
          <span style={{ alignSelf: "center", marginLeft: "2rem" }}>
            Unsaved Changes
          </span>
        </div>

        <div style={{ alignSelf: "center" }}>
          <Button
            shape="round"
            // onClick={ondiscard}
            htmlType="reset"
            disabled={loading}
          >
            Discard
          </Button>
          <Button
            type="primary"
            shape="round"
            style={{ marginLeft: "1rem" }}
            // onClick={onsave}
            htmlType="submit"
            loading={loading}
          >
            Save
          </Button>
        </div>
        {contextHolder}
      </div>
      <Divider />
    </div>
  );
}
