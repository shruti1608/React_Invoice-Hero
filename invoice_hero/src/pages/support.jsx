import { Button, Divider, Typography, Alert } from "antd";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import ceo from "../images/CEO.jpg";

export default function Support() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            //backgroundColor: "pink",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            margin: "1rem",
            width: "35rem",
            color: "#637381",
          }}
        >
          <span
            style={{ fontSize: "1rem", color: "#4d5055", fontWeight: "bold" }}
          >
            Dedicated Relationship Manager
          </span>
          <span
            style={{ color: "#637381", fontSize: "1rem", marginTop: "0.1rem" }}
          >
            Need any help with setup or customization? Contact your dedicated
            relationship manager details.
          </span>
          <div
            style={{
              border: "solid",
              borderWidth: "0.1rem",
              marginTop: "1rem",
              borderColor: "#c4cdd5",
              flexDirection: "column",
              display: "flex",
              borderRadius: "0.3rem",
            }}
          >
            <img
              src={ceo}
              style={{
                height: "8rem",
                width: "8rem",
                borderRadius: "12rem",
                alignSelf: "center",
                marginTop: "1rem",
                // borderColor: "#ccc",
                // border: "solid",
                // //borderWidth: "0.1rem",
              }}
            />
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <span style={{ color: "#4d5055" }}>Rajesh</span>
              <span>Shopify Expert</span>

              <span style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}>
                Send us a mail at{" "}
                <Typography.Link>support@mlveda.com</Typography.Link> and our
                awesome support team
              </span>
              <span style={{ fontSize: "0.9rem" }}>
                will get back to you within 24 hours.
              </span>

              <Button shape="round" style={{ margin: "1.5rem" }}>
                <a>Request call back</a>
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginRight: "10rem",
            marginLeft: "10rem",
            //backgroundColor: "#c4cdd5",
          }}
        >
          <Divider />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            margin: "1rem",
            width: "35rem",
            color: "#637381",
          }}
        >
          <Typography.Text
            type="danger"
            style={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            Delete & Uninstalling
          </Typography.Text>
          <Typography.Text type="danger" style={{ fontSize: "1rem" }}>
            Danzer Zone
          </Typography.Text>
          <div
            style={{
              border: "solid",
              borderWidth: "0.1rem",
              marginTop: "1rem",
              borderColor: "#c4cdd5",
              flexDirection: "column",
              display: "flex",
              borderRadius: "0.3rem",
            }}
          >
            <div style={{ margin: "2rem" }}>
              <Alert
                description="If you are facing any issues, please contact your dedicated relationship manager before deleting the app."
                type="info"
                showIcon
              />
              <div style={{ marginTop: "2rem" }}>
                <span style={{ color: "#4d5055", fontWeight: "bold" }}>
                  Curreent App Status:{" "}
                  <Typography.Text type="success" style={{ fontSize: "1rem" }}>
                    Live & patching
                  </Typography.Text>
                </span>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <span style={{ fontSize: "0.9rem" }}>
                  {" "}
                  Our app will not insert any code on your store themes etc. So
                  to delete or uninstall Invoice Hero, simply delete Invoice
                  Hero app from your apps in Shopify admin.
                </span>
              </div>
              <Button danger style={{ marginTop: "2rem" }} shape="round">
                Delete App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
