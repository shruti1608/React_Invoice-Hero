import { Button, Divider, Dropdown, Modal, Space } from "antd";
import { useState } from "react";
export default function Mergedpdf() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [isModalOpen, setIsModalOpen] = useState(false);
  // function showModal() {
  //   setIsModalOpen(true);
  //   console.log(isModalOpen);
  // }
  // function handleCancel() {
  //   setIsModalOpen(false);
  // }
  // function handleOk() {
  //   setIsModalOpen(false);
  // }

  const showModal = () => {
    setIsModalOpen(true);
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
          <Button key="ok" type="primary" onClick={handleCancel}>
            close
          </Button>,
        ]}
      >
        <p>Sending to your email id: jatin.parate@mlveda.com</p>
      </Modal>
      {/* <Modal
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
      </Modal> */}
    </>
  );
}
