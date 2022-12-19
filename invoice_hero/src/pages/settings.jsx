import { Button, Col, Divider, Input, Modal, notification, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Header from "../components/Header";
import emailSettings from "../images/emailSettings.png";
import taxAndShippingSettings from "../images/taxAndShippingSettings.png";
import shipping from "../images/shipping-settings.png";
import discount from "../images/discount-settings.png";
import currency from "../images/currencySettings.png";
import text from "../images/textSettings.png";
import invoiceDesign from "../images/invoiceDesignSettings.png";
import customerDetails from "../images/customerDetailsSettings.png";
import companyDetails from "../images/companyDetailsSettings.png";
import pricing from "../images/pricingSettings.png";
import { NavLink } from "react-router-dom";

export default function Settings() {
  const [on, seton] = useState(true);
  const [modal, setmodal] = useState(false);
  const [status, setstatus] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.open({
      message: "Saved Successfully",
      placement,
      style: { backgroundColor: "pink" },
    });
  };

  function showmodal() {
    setmodal(true);
  }
  function handleok() {
    setmodal(false);
    seton(false);
    setstatus(false);
    openNotification("bottom");
  }
  function handlecancle() {
    setmodal(false);
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.5rem",
            padding: "1rem",
            paddingTop: "0.7rem",
            paddingBottom: "0.7rem",
            width: "30rem",
            borderRadius: "0.3rem",
            borderColor: "#c4cdd5",
            borderStyle: "solid",
            borderWidth: "0.1rem",
            fontFamily: "sans-serif",
            fontSize: "15px",
            color: "#4d5055",
          }}
        >
          <span style={{ alignSelf: "center" }}>
            Automatic invoice sending is{" "}
            {on ? (
              <span
                style={{
                  backgroundColor: "#bbe5b3",
                  padding: "0.3rem",
                  borderRadius: "1rem",
                  color: "#414f3e",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                Enabled
              </span>
            ) : (
              <span
                style={{
                  backgroundColor: "orange",
                  padding: "0.3rem",
                  borderRadius: "1rem",
                  color: "#414f3e",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                Disabled
              </span>
            )}
          </span>
          <Button
            shape="round"
            size="small"
            onClick={showmodal}
            style={{
              marginLeft: "3rem",
              alignSelf: "center",
              border: "solid",
              borderColor: "#00a2ff",
              borderWidth: "0.1rem",
            }}
          >
            <a style={{ color: "#00a2ff", fontWeight: "bold" }}> Edit </a>
          </Button>
          {status ? (
            <Modal
              title="Do you want to stop sending invoices automatically for your future orders?"
              open={modal}
              onOk={handleok}
              onCancel={handlecancle}
              okText="Confirm"
              okButtonProps={{ shape: "round" }}
              cancelButtonProps={{ shape: "round" }}
              width={"600px"}
              centered={true}
            >
              <Divider />
            </Modal>
          ) : (
            <Modal
              title="Do you want to send invoices automatically for your future orders?"
              open={modal}
              onOk={() => {
                setmodal(false);
                seton(true);
                setstatus(true);
                openNotification("bottom");
              }}
              onCancel={() => {
                setmodal(false);
                seton(false);
                setstatus(false);
              }}
              okText="Confirm"
              okButtonProps={{ shape: "round" }}
              cancelButtonProps={{ shape: "round" }}
              width={"600px"}
              centered={true}
            >
              <Divider />
            </Modal>
          )}
          {contextHolder}
        </div>
      </div>
      <div
        style={{
          marginRight: "10rem",
          marginLeft: "10rem",
          backgroundColor: "#c4cdd5",
          marginTop: "-1.5rem",
        }}
      >
        <Divider />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input placeholder="Search" size="large" style={{ width: "32rem" }} />
      </div>
      <div
        style={{
          marginTop: "5rem",
          //marginLeft: "20rem",
          //marginRight: "20rem",
          //backgroundColor: "gray",
        }}
      >
        <Row justify="space-around" style={{ width: "" }}>
          <Col span={4}></Col>
          <Col span={2}>
            <figure>
              <img src={emailSettings} />
              <figcaption>
                <NavLink>Email</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}>
            <figure>
              <img src={taxAndShippingSettings} />
              <figcaption>
                <NavLink to="/settings/tax-settings">Tax</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}>
            <figure>
              <img src={shipping} />
              <figcaption>
                <NavLink>Shipping</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}>
            <figure>
              <img src={discount} />
              <figcaption>
                <NavLink>Discount</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}>
            <figure>
              <img src={currency} />
              <figcaption>
                <NavLink to="/settings/currency-settings">Currency</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row justify="space-around">
          <Col span={4}></Col>
          <Col span={2}>
            <figure>
              <img src={text} />
              <figcaption>
                <NavLink>Language, Terms & Headings</NavLink>
              </figcaption>
            </figure>
          </Col>

          <Col span={2}>
            <figure>
              <img src={invoiceDesign} />
              <figcaption>
                <NavLink>Design & options</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}>
            <figure>
              <img src={customerDetails} />

              <figcaption style={{ alignSelf: "center" }}>
                <NavLink>Billing & Shipping</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}>
            <figure>
              <img src={companyDetails} />
              <figcaption>
                <NavLink>Company</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}></Col>
          <Col span={4}></Col>
        </Row>
      </div>
      <div
        style={{
          marginRight: "10rem",
          marginLeft: "10rem",
          backgroundColor: "#c4cdd5",
        }}
      >
        <Divider />
      </div>
      <div>
        <Row justify="space-around">
          <Col span={4}></Col>
          <Col span={2}>
            <figure>
              <img src={pricing} />
              <figcaption>
                <NavLink to="/pricing">Pricing</NavLink>
              </figcaption>
            </figure>
          </Col>
          <Col span={2}></Col>
          <Col span={2}></Col>
          <Col span={2}></Col>
          <Col span={2}></Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </div>
  );
}
