import { Button, Divider, Dropdown, Menu, Space } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import invoiceHero from "../images/invoiceHero.png";
import Mergedpdf from "./Mergedpdf";
export default function TmpHeader({
  selectedRowKeys,
  setchooseheader,
  setSelectedRowKeys,
}) {
  const items = [
    {
      label: "Send invoices to customers",
      key: "1",
    },
    {
      label: "Send individual invoices to me",
      key: "2",
    },
    {
      label: "Send merged invoice to me",
      key: "3",
    },
  ];

  return (
    <div>
      <div
        style={{
          height: "1.2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "0.9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
          <span
            style={{
              color: "gray",
              alignSelf: "center",
              fontWeight: "bold",
              marginLeft: "3rem",
              fontSize: "1.2rem",
            }}
          >
            Selected {selectedRowKeys.length} invoices
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            type="link"
            onClick={() => {
              setchooseheader(false);
              setSelectedRowKeys([]);
            }}
          >
            Cancel
          </Button>
          <div>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button shape="round">
                <a>
                  <Space>
                    More
                    <CaretDownOutlined />
                  </Space>
                </a>
              </Button>
            </Dropdown>
          </div>
          <div style={{ marginLeft: "0.5rem" }}>
            <Mergedpdf />
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
