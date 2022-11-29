import { Layout } from "antd";
import { BulbFilled } from "@ant-design/icons";
const { Footer } = Layout;
export default function Footerlayout() {
  return (
    <div>
      <Layout
        style={{
          marginLeft: "10rem",
          marginRight: "10rem",
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <Footer
          style={{
            backgroundColor: "#e1f5fd",
            borderTopColor: "#00a2ff",
            borderTopStyle: "solid",
            boxShadow: "1px 1px 1px  lightgray",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <BulbFilled
              style={{
                color: "#00a2ff",
                padding: "1rem",
              }}
            />

            <span
              style={{
                color: "#4d5055",
                fontSize: "0.9rem",
                alignSelf: "flex-end",
              }}
            >
              Now you can view/download your invoices from your orders page
              itself. Select particular orders (50 max) or open a particular
              order and choose Invoice Hero features from More actions drop
              down.
            </span>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}
