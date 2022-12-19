import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import { LeftCircleTwoTone } from "@ant-design/icons";

export default function SettingsTitlebar({ name }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          marginTop: "1rem",
          marginLeft: "10rem",
          justifyContent: "flex-start",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <LeftCircleTwoTone
          onClick={() => navigate("/settings")}
          style={{ fontSize: "2rem" }}
        />

        <span
          style={{
            fontWeight: "bold",
            marginLeft: "1.5rem",
            alignSelf: "center",
            //alignItems: "center",
          }}
        >
          {name}
        </span>
      </div>
      <Divider />
    </>
  );
}
