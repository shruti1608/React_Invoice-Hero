import Header from "../components/Header";
import { LeftCircleTwoTone } from "@ant-design/icons";
import { Button, Divider, Form, Radio, Space, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { currenysettings, getcurrenysettings } from "../apicalls";
import Savebar from "../components/Savebar";
import SettingsTitlebar from "../components/SettingsTitlebar";
import { useMutation, useQuery } from "@tanstack/react-query";
//import { useForm } from "antd/es/form/Form";
export default function CurrencySettings() {
  const [api, contextHolder] = notification.useNotification();
  const [initialValues, setinitialValues] = useState({
    radio: "presentment_money",
  });
  const [form] = Form.useForm();

  const currencyformat = useMutation(currenysettings, {
    onSuccess: (data) => {
      console.log(data.invoiceSettings.generateInvoiceOn);
      setinitialValues({ radio: data.invoiceSettings.generateInvoiceOn });
      openNotification("bottom");
    },
  });

  useEffect(() => {
    form.resetFields();
  }, [initialValues]);

  function onFinish(values) {
    console.log(values);
    // currencyformat.mutate([values.radio]);

    currencyformat.mutate({
      invoiceSettings: {
        generateInvoiceOn: values.radio,
      },
    });
  }

  const openNotification = (placement) => {
    api.open({
      message: "Saved Successfully",
      placement,
      style: { backgroundColor: "pink" },
    });
  };

  console.log("initialValues", initialValues);
  return (
    <Form
      initialValues={initialValues}
      onFinish={onFinish}
      layout="vertical"
      form={form}
    >
      <Form.Item noStyle shouldUpdate>
        {(form) => {
          console.log(form, form.isFieldsTouched());
          const isFormchanged = form.isFieldsTouched();
          if (!isFormchanged) {
            return null;
          }
          return <Savebar style={{}} loading={currencyformat.isLoading} />;
        }}
      </Form.Item>
      <div>
        <Header />
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.2rem",
            color: "#4d5055",
          }}
        >
          <SettingsTitlebar name={"Currency Settings"} />
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
                <Form.Item
                  rules={[{ required: true, message: "required" }]}
                  name={"radio"}
                  //label="radio"
                >
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value={"presentment_money"}>
                        Use customer's checkout or payment currency on the
                        invoices
                      </Radio>
                      <Radio value={"shop_money"}>
                        Use store currency on the invoices
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      </div>
      {contextHolder}
    </Form>
  );
}
