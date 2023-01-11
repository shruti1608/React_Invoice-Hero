import {
  FormOutlined,
  MenuOutlined,
  BulbOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import { useState } from "react";

export default function Header({ collapsed, setCollapsed }) {
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Menu mode="horizontal">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <MenuOutlined
            onClick={toggleCollapsed}
            style={{
              alignSelf: "center",
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          />

          <FormOutlined
            style={{
              color: "orange",
              alignSelf: "center",
              paddingRight: "1rem",
              fontSize: "2rem",
            }}
          />
          <span
            style={{
              alignSelf: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Notes
          </span>
        </div>
      </Menu>
    </>
  );
}
