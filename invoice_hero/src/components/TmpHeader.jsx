import { Button, Divider, Dropdown, Menu, Space, Modal } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import invoiceHero from "../images/invoiceHero.png";
import Mergedpdf from "./Mergedpdf";
import { invoicetocustomer, invoicetome, mergedpdfcall } from "../apicalls";
import { useMutation } from "@tanstack/react-query";

export default function TmpHeader({
  selectedRowKeys,
  setchooseheader,
  setSelectedRowKeys,
}) {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const Invoicetocustomer = useMutation(invoicetocustomer, {
    onSuccess: (res, variable) => {
      console.log("data", res, res.status);
      if (res.status == "success") {
        setIsModalOpen3(true);
      }
      if (res.status == "failed") {
        setIsModalOpen1(true);
      }
    },
  });

  const Invoicetome = useMutation(invoicetome, {
    onSuccess: (res, variable) => {
      console.log("data", res, res.status);
      if (res.status == "success") {
        setIsModalOpen2(true);
      }
      if (res.status == "failed") {
        setIsModalOpen1(true);
      }
    },
  });

  const Mergedinvoice = useMutation(mergedpdfcall, {
    onSuccess: (res, variable) => {
      console.log("data", res, res.status);
      if (res.status == "success") {
        setIsModalOpen4(true);
      }
      if (res.status == "failed") {
        setIsModalOpen1(true);
      }
    },
  });

  const items = [
    {
      label: "Send invoices to customers",
      key: "1",
      onClick: () => {
        Invoicetocustomer.mutate([selectedRowKeys]);
      },
    },
    {
      label: "Send individual invoices to me",
      key: "2",
      onClick: () => {
        Invoicetome.mutate([selectedRowKeys]);
      },
    },
    {
      label: "Send merged invoice to me",
      key: "3",
      onClick: () => {
        Mergedinvoice.mutate([selectedRowKeys]);
      },
    },
  ];

  return (
    <>
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
              <Mergedpdf selectedRowKeys={selectedRowKeys} />
            </div>
          </div>
        </div>
        <Divider />
      </div>
      <Modal
        title="Success"
        open={isModalOpen2}
        onOk={() => setIsModalOpen2(false)}
        onCancel={() => setIsModalOpen2(false)}
        footer={[
          <Button
            key="ok"
            type="primary"
            shape="round"
            onClick={() => setIsModalOpen2(false)}
            url="/pricing"
          >
            Close
          </Button>,
        ]}
      >
        <Divider />
        <p>
          We will be sending invoices of the {selectedRowKeys.length} orders you
          have selected to the respective customer’s email ids. You will receive
          a confirmation email to jatin.parate@mlveda.com once the invoices are
          sent.
        </p>
        <Divider />
      </Modal>
      <Modal
        title="Bulk pdf"
        open={isModalOpen1}
        onOk={() => setIsModalOpen1(false)}
        onCancel={() => setIsModalOpen1(false)}
        footer={[
          <Button
            key="ok"
            type="primary"
            shape="round"
            onClick={() => setIsModalOpen1(false)}
            url="/pricing"
          >
            Start 7 day free trial now.
          </Button>,
        ]}
      >
        <Divider />
        <p>
          This feature is available only for the customers who are using the
          paid version of the app.
        </p>
        <Divider />
      </Modal>
      <Modal
        title="Success"
        open={isModalOpen3}
        onOk={() => setIsModalOpen3(false)}
        onCancel={() => setIsModalOpen3(false)}
        footer={[
          <Button
            key="ok"
            type="primary"
            shape="round"
            onClick={() => setIsModalOpen3(false)}
            url="/pricing"
          >
            Close
          </Button>,
        ]}
      >
        <Divider />
        <p>
          You will receive an email having a link to download the invoices of
          the {selectedRowKeys.length} orders you have selected shortly to
          jatin.parate@mlveda.com
        </p>
        <Divider />
      </Modal>
      <Modal
        title="Bulk pdf"
        open={isModalOpen4}
        onOk={() => setIsModalOpen4(false)}
        onCancel={() => setIsModalOpen4(false)}
        footer={[
          <Button
            key="ok"
            type="primary"
            shape="round"
            onClick={() => setIsModalOpen4(false)}
          >
            Close
          </Button>,
        ]}
      >
        <Divider />
        <p>Sending to your email id: jatin.parate@mlveda.com</p>
        <Divider />
      </Modal>
    </>
  );
}
