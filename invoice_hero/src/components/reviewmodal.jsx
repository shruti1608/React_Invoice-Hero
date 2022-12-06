import { Divider, Modal } from "antd";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import foldedhands from "../images/folded-hands.png";
import smilimgface from "../images/smilingFaceWithHeartEyes.png";
import cryingFace from "../images/cryingFace.png";
import { NavLink } from "react-router-dom";

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
        //title="Please share your experience with us"
        open={ismodalopen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={null}
        // style={{ width: "1000rem" }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <span
              style={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: "bold",
                paddingRight: "1rem",
                alignItems: "center",
              }}
            >
              Please share your experience with us
            </span>
            <img src={foldedhands} />
          </div>
          <Divider />
          <p>
            We have put in a lot of effort to create a simple invoicing app. It
            is built exclusively for Shopify store owners to save time from
            invoicing and accounting hassles.
          </p>
          <p>
            We are continuously looking to make our app better. So, please write
            a genuine feedback of your experience.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#45b14d",
              padding: "0.35rem",
              borderRadius: "1rem",
            }}
          >
            <img src={smilimgface} />
            <div style={{ alignSelf: "center", paddingLeft: "1rem" }}>
              <span style={{ paddingRight: "0.5rem" }}>YES!</span>
              <span>I would like to write a review now</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#c4e9f2",
              padding: "0.35rem",
              borderRadius: "1rem",
              marginTop: "1rem",
              border: "solid",
              borderColor: "#1da9e9",
            }}
          >
            <img src={cryingFace} />
            <div style={{ alignSelf: "center", paddingLeft: "1rem" }}>
              <span style={{ paddingRight: "0.5rem" }}>NO!</span>
              <span>I will review it after few days</span>
            </div>
          </div>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <span>
              Contact us on <NavLink>support@mlveda.com</NavLink> if you have
              any queries
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
