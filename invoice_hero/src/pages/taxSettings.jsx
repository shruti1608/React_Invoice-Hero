import { Divider } from "antd";
import Header from "../components/Header";
import SettingsTitlebar from "../components/SettingsTitlebar";

export default function TaxSettings() {
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
        <SettingsTitlebar name={"Tax Settings"} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "27rem",
              backgroundColor: "#e1f5fd",
              borderTopColor: "#00a2ff",
              borderTopStyle: "solid",
              padding: "1rem",
              alignSelf: "center",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Important Info:</span>
            <span>
              You can configure tax settings only from Shopify Admin. Invoice
              Hero will create invoices accordingly. You do not need to do
              anything here.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "27rem",
              alignSelf: "center",
              padding: "1rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Taxes</span>
            <span>
              Enter your tax number and choose display settings for your tax
              details
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "27rem",
              alignSelf: "center",
              padding: "1rem",
              border: "solid",
              borderRadius: "0.1rem",
            }}
          >
            <span></span>
          </div>

          <Divider style={{ backgroundColor: "lightgray" }} />
        </div>
      </div>
    </div>
  );
}
