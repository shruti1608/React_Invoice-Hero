import Header from "../components/Header";
import { LeftCircleTwoTone } from "@ant-design/icons";
import { Divider, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CurrencySettings() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Header />
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.2rem",
          color: "#4d5055",
        }}
      >
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
            Currency Settings
          </span>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Invoice Currencies</span>
            <span style={{ fontSize: "1rem", marginTop: "0.1rem" }}>
              Configure the currency used in your invoice
            </span>
            <div
              style={{
                border: "solid",
                borderWidth: "0.1rem",
                borderRadius: "0.3rem",
                borderColor: "lightgray",
                padding: "2rem",
                marginTop: "2rem",
              }}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>
                    Use customer's checkout or payment currency on the invoices
                  </Radio>
                  <Radio value={2}>Use store currency on the invoices</Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
