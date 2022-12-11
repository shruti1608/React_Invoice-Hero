import { Button, Divider, Dropdown, Modal, Space } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { mergedpdfcall } from "../apicalls";

export default function Mergedpdf({ selectedRowKeys }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const Mergedpdf = useMutation(mergedpdfcall, {
    onSuccess: (res, variable) => {
      console.log("data", res, res.status);
      if (res.status == "success") {
        setIsModalOpen(true);
      }
      if (res.status == "failed") {
        setIsModalOpen1(true);
      }
    },
  });

  const showModal = () => {
    //setIsModalOpen(true);
    Mergedpdf.mutate([selectedRowKeys]);
    console.log(selectedRowKeys);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      label: "You will recevie merged",
      key: "1",
    },
    {
      label: "pdf to your email id",
      key: "2",
    },
  ];

  return (
    <>
      {" "}
      <div onClick={showModal}>
        <Dropdown menu={{ items }}>
          <Button shape="round" type="primary">
            <Space>Merged pdf</Space>
          </Button>
        </Dropdown>
      </div>
      <Modal
        title="Bulk pdf"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="ok" type="primary" shape="round" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <Divider />
        <p>Sending to your email id: jatin.parate@mlveda.com</p>
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
    </>
  );
}
