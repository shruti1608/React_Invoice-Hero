import { Button } from "antd";
import { useState } from "react";
import Header from "../components/Header";

export default function Settings() {
  const [on, seton] = useState(true);
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "pink",
          marginTop: "1rem",
          marginBottom: "1rem",
          padding: "1rem",
          // marginLeft: "20rem",
          // marginRight: "8rem",
          width: "30rem",
        }}
      >
        <span style={{}}>
          Automatic invoice sending is{" "}
          {on ? <span>Enabled</span> : <span>Disabled</span>}
        </span>
        <Button shape="round" type="primary" style={{ marginLeft: "3rem" }}>
          Edit
        </Button>
      </div>
    </div>
  );
}
