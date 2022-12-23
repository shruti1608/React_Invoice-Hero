import { useQuery } from "@tanstack/react-query";
import { Checkbox, Divider, Form, Input, Space, Typography } from "antd";
import Header from "../components/Header";
import SettingsTitlebar from "../components/SettingsTitlebar";
import { getcurrenysettings } from "../apicalls";
import { useEffect, useState } from "react";
import Savebar from "../components/Savebar";

export default function TaxSettings() {
  const { data: settings } = useQuery(["currency-format"], getcurrenysettings);
  const [form] = Form.useForm();
  const [taxNumber, settaxNumber] = useState({
    taxNumber: settings.companyDetails.taxNumber,
  });
  const [isShowTax, setisShowTax] = useState(
    settings.invoiceSettings.isShowTax
  );
  const [isShowIndividualTax, setisShowIndividualTax] = useState(
    settings.invoiceSettings.isShowIndividualTax
  );
  const [isShowEmptyTaxInSummary, setisShowEmptyTaxInSummary] = useState(
    settings.invoiceSettings.isShowEmptyTaxInSummary
  );
  const [isShowCustomerVatNumber, setisShowCustomerVatNumber] = useState({
    show_customer_tax_number: settings.invoiceSettings.isShowCustomerVatNumber,
  });
  const [customerVatNumberLabel, setcustomerVatNumberLabel] = useState({
    taxlabel: settings.invoiceSettings.customerVatNumberLabel,
  });

  function onFinish(values) {
    console.log(values.show_tax);
  }
  useEffect(() => {
    form.resetFields();
  }, []);

  console.log(
    taxNumber,
    isShowTax,
    isShowIndividualTax,
    isShowEmptyTaxInSummary
  );
  return (
    <Form
      layout="vertical"
      initialValues={{ show_tax: isShowTax }}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item noStyle shouldUpdate>
        {(form) => {
          console.log(form, form.isFieldsTouched());
          const isFormchanged = form.isFieldsTouched();
          if (!isFormchanged) {
            return null;
          }
          return <Savebar style={{}} loading={settings.isLoading} />;
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
                borderColor: "lightgray",
              }}
            >
              <Form.Item
                label="Tax type and Tax number of your company"
                style={{ fontWeight: "bold" }}
                name="taxNumber"
              >
                <Input />
              </Form.Item>
              <span>Include your tax type along with your tax number. </span>
              <span>
                Better to use GST 12345 or VAT 12345 instead of 12345.
              </span>
              <Form.Item name="show_tax">
                <Checkbox>Show tax for each product</Checkbox>
              </Form.Item>
              <Form.Item name="show_individual">
                <Checkbox checked={!isShowIndividualTax}>
                  Show individual tax details (if multiple taxes are applied)
                </Checkbox>
              </Form.Item>
              <Form.Item name="do_not_show_tax">
                <Checkbox checked={!isShowEmptyTaxInSummary}>
                  Do not show tax amount when the total tax is zero
                </Checkbox>
              </Form.Item>
            </div>
            <div style={{ width: "27rem", alignSelf: "center" }}>
              <Divider style={{ backgroundColor: "lightgray" }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "27rem",

                alignSelf: "center",
                // color: "#00a2ff",
                //   border: "1px solid #00a2ff",
                //   borderRadius: "100px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Customer's GST/VAT number{" "}
                <Typography.Link
                  style={{
                    borderRadius: "1rem",
                    borderStyle: "solid",
                    padding: "0.3rem",
                  }}
                >
                  PRO
                </Typography.Link>
              </span>
              <span>
                Do you want to generate invoices including customer's Tax (VAT
                or GST) number on the invoice?
              </span>
            </div>
            <div
              style={{
                display: "flex",
                width: "26rem",
                maxWidth: "27rem",
                alignSelf: "center",
                padding: "1rem",
                border: "solid",
                borderRadius: "1px",
                borderColor: "lightgray",
              }}
            >
              <Form.Item name="show_customer_tax_number">
                <Checkbox>Show customer's Tax (VAT/GST) number</Checkbox>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
