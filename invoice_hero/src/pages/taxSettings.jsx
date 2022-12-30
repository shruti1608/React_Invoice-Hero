import { useQuery, useMutation } from "@tanstack/react-query";
import {
  Checkbox,
  Divider,
  Form,
  Input,
  Alert,
  Typography,
  notification,
} from "antd";
import Header from "../components/Header";
import SettingsTitlebar from "../components/SettingsTitlebar";
import { getcurrenysettings, currenysettings } from "../apicalls";
import { useEffect, useState } from "react";
import Savebar from "../components/Savebar";

export default function TaxSettings() {
  const { data: settings } = useQuery(["currency-format"], getcurrenysettings);
  //console.log("settings", settings);
  const [form] = Form.useForm();
  const [showvatlabel, setshowvatlabel] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [initialValues, setinitialValues] = useState({
    taxNumber: settings.companyDetails.taxNumber,
    show_tax: settings.invoiceSettings.isShowTax,
    show_individual: settings.invoiceSettings.isShowIndividualTax,
    do_not_show_tax: !settings.invoiceSettings.isShowEmptyTaxInSummary,
    show_customer_tax_number: settings.invoiceSettings.isShowCustomerVatNumber,
    taxlabel: settings.invoiceSettings.customerVatNumberLabel,
  });
  useEffect(() => {
    form.resetFields();
  }, [initialValues]);

  const taxdetails = useMutation(currenysettings, {
    onSuccess: (settings) => {
      console.log("in onsuccess function", settings);
      setinitialValues({
        taxNumber: settings.companyDetails.taxNumber,
        show_tax: settings.invoiceSettings.isShowTax,
        show_individual: settings.invoiceSettings.isShowIndividualTax,
        do_not_show_tax: settings.invoiceSettings.isShowEmptyTaxInSummary,
        show_customer_tax_number:
          settings.invoiceSettings.isShowCustomerVatNumber,
        taxlabel: settings.invoiceSettings.customerVatNumberLabel,
      });
      openNotification("bottom");
    },
  });
  function onFinish(values) {
    console.log("values in onfinish", values, values.show_tax.checked);
    //  taxdetails.mutate(["", values]);
    taxdetails.mutate({
      companyDetails: {
        taxNumber: values.taxNumber,
      },
      invoiceSettings: {
        isShowTax: values.show_tax,
        isShowIndividualTax: values.show_individual,
        isShowEmptyTaxInSummary: values.do_not_show_tax,
        isShowCustomerVatNumber: values.show_customer_tax_number,
        customerVatNumberLabel: values.taxlabel,
      },
    });
  }

  function showvatlabeloption(e) {
    // console.log(e.target.checked, e.target.value);

    // if (e.target.checked) {
    //   console.log(e.target.checked,showvatlabel)
    //   setshowvatlabel(e.target.checked);
    // } else {
    //   setshowvatlabel(false);
    // }
    // console.log(e.target.checked,showvatlabel)
    setshowvatlabel(e.target.checked);
  }

  const openNotification = (placement) => {
    api.open({
      message: "Saved Successfully",
      placement,
      style: { backgroundColor: "pink" },
    });
  };
  console.log(" initialValues =>", initialValues);
  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item noStyle shouldUpdate>
        {(form) => {
          //console.log(form, form.isFieldsTouched());
          const isFormchanged = form.isFieldsTouched();
          if (!isFormchanged) {
            return null;
          }
          return <Savebar style={{}} loading={taxdetails.isLoading} />;
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
                <Input value={initialValues.taxNumber} />
              </Form.Item>
              <span>Include your tax type along with your tax number. </span>
              <span>
                Better to use GST 12345 or VAT 12345 instead of 12345.
              </span>
              <Form.Item name="show_tax" valuePropName="checked">
                <Checkbox
                  defaultChecked={initialValues.show_tax}
                  onChange={(e) => console.log(e.target.value)}
                >
                  Show tax for each product
                </Checkbox>
              </Form.Item>
              <Form.Item name="show_individual" valuePropName="checked">
                <Checkbox
                  defaultChecked={initialValues.show_individual}
                  onChange={(e) => console.log(e.target.checked)}
                >
                  Show individual tax details (if multiple taxes are applied)
                </Checkbox>
              </Form.Item>
              <Form.Item name="do_not_show_tax" valuePropName="checked">
                <Checkbox defaultChecked={initialValues.do_not_show_tax}>
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
                flexDirection: "column",
              }}
            >
              <Form.Item
                name="show_customer_tax_number"
                valuePropName="checked"
              >
                <Checkbox
                  defaultChecked={initialValues.show_customer_tax_number}
                  onChange={showvatlabeloption}
                >
                  Show customer's Tax (VAT/GST) number
                </Checkbox>
              </Form.Item>
              {showvatlabel === true ? (
                <>
                  <Alert
                    message="Important Info:"
                    description="You must send an email to support@mlveda.com
                  so that we can add a field to collect customer's tax details on your cart page."
                    type="warning"
                  />

                  <Form.Item
                    name="taxlabel"
                    label="Tax Label"
                    style={{ marginTop: "1rem" }}
                  >
                    <Input value={initialValues.taxlabel} />
                  </Form.Item>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {contextHolder}
    </Form>
  );
}

// how to get inactive form field value
