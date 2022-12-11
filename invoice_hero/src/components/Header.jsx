import { Menu, Modal } from "antd";
import { useState } from "react";

import {
  FileProtectOutlined,
  SettingFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import invoiceHero from "../images/invoiceHero.png";
import reviewImg from "../images/reviewImg.png";
import { getshopinfo } from "../apicalls";
import Reviewmodal from "../components/reviewmodal";

export default function Header() {
  const [ismodalopen, setismodalopen] = useState(false);
  const navigate = useNavigate();

  function showmodal() {
    console.log("modal opned");
    setismodalopen(true);
  }
  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={""}
        onClick={({ key }) => {
          if (key.indexOf("/") != -1) {
            console.log("in if key", key);
            navigate(key);
          } else {
            console.log("in else key", key);
            navigate("/dashboard");
          }
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: "10rem",
            marginRight: "10rem",
          }}
        >
          <img src={invoiceHero} style={{ alignSelf: "center" }} />

          <span
            style={{
              fontWeight: "bold",
              alignSelf: "center",
              fontSize: "1.5rem",
              marginLeft: "0.5rem",
              color: "#4d5055",
            }}
          >
            Invoice Hero
          </span>
        </div>
        <Menu.Item
          label="INVOICES"
          key="/dashboard"
          icon={<FileProtectOutlined />}
        >
          INVOICES
        </Menu.Item>
        <Menu.Item label="SETTINGS" key="/settings" icon={<SettingFilled />}>
          SETTINGS
        </Menu.Item>
        <Menu.Item
          label="SUPPORT"
          key="/support"
          icon={<QuestionCircleFilled />}
        >
          SUPPORT
        </Menu.Item>

        <Menu.Item
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            marginLeft: "10rem",
            marginRight: "10rem",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src={reviewImg}
              style={{ alignSelf: "center" }}
              onClick={showmodal}
            />
          </div>
        </Menu.Item>
      </Menu>
      <Reviewmodal ismodalopen={ismodalopen} setismodalopen={setismodalopen} />
      {/* //     items={[
    //       {
    //         label: "INVOICES",
    //         key: "/dashboard",
    //         icon: <FileProtectOutlined />,
    //       },
    //       { label: "SETTINGS", key: "/settings", icon: <SettingFilled /> },
    //       { label: "SUPPORT", key: "/support", icon: <QuestionCircleFilled /> },
    //     ]}
    //   /> */}
    </div>
  );
}
