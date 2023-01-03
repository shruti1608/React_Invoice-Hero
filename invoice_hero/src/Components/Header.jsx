import { FormOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import { useState } from "react";

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Menu mode="horizontal" style={{ backgroundColor: "yellow" }}>
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
              paddingRight: "2rem",
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

      <Menu
        //defaultSelectedKeys={['1']}
        //defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        // items={items}
      >
        <FormOutlined
          style={{
            color: "orange",
            alignSelf: "center",
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
      </Menu>
    </>
  );
}
