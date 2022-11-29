import { Modal } from "antd";

export default function Reviewmodal({ ismodalopen, setismodalopen }) {
  function handleOk() {
    setismodalopen(false);
  }

  function handleCancel() {
    setismodalopen(false);
  }

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={ismodalopen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
