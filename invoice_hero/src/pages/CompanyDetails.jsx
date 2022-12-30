import { Form, Input, Button, Upload, message, notification } from "antd";
import Savebar from "../components/Savebar";
import Header from "../components/Header";
import SettingsTitlebar from "../components/SettingsTitlebar";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { currenysettings, getcurrenysettings } from "../apicalls";
import { UploadOutlined } from "@ant-design/icons";

export default function CompanyDetails() {
  const { data: settings } = useQuery(["currency-format"], getcurrenysettings);
  console.log(settings);
  const [initialValues, setinitialValues] = useState({
    brand_name: settings.companyDetails.brandName,
    legalNameForBusiness: settings.companyDetails.legalNameForBusiness,
    email: settings.companyDetails.email,
    logo: settings.companyDetails.logo,
    website: settings.companyDetails.website,
    phone: settings.companyDetails.phone,
    address1: settings.companyDetails.address.address1,
    address2: settings.companyDetails.address.address2,
    city: settings.companyDetails.address.city,
    postcode: settings.companyDetails.address.postcode,
    country: settings.companyDetails.address.country,
    state: settings.companyDetails.address.state,
    additionalText: settings.companyDetails.additionalText,
  });
  const [form] = Form.useForm();
  const [msgerror, setmsgerror] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const companydetails = useMutation(currenysettings, {
    onSuccess: (settings) => {
      setinitialValues({
        brand_name: settings.companyDetails.brandName,
        legalNameForBusiness: settings.companyDetails.legalNameForBusiness,
        email: settings.companyDetails.email,
        logo: settings.companyDetails.logo,
        website: settings.companyDetails.website,
        phone: settings.companyDetails.phone,
        address1: settings.companyDetails.address.address1,
        address2: settings.companyDetails.address.address2,
        city: settings.companyDetails.address.city,
        postcode: settings.companyDetails.address.postcode,
        country: settings.companyDetails.address.country,
        state: settings.companyDetails.address.state,
        additionalText: settings.companyDetails.additionalText,
      });
      openNotification("bottom");
    },
  });
  const openNotification = (placement) => {
    api.open({
      message: "Saved Successfully",
      placement,
      style: { backgroundColor: "pink" },
    });
  };
  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/gif";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/JPG/GIF file!");
      setmsgerror("You can only upload JPG/PNG/JPG/GIF file!");
    } else {
      setmsgerror("");
    }
    const isLt2M = file.size / 1000 < 100;
    if (!isLt2M) {
      message.error("Image must smaller than 100KB!");
      setmsgerror("Image must smaller than 100KB!");
    } else {
      setmsgerror("");
    }

    return isJpgOrPng && isLt2M;
  }

  function onFinish(values) {
    console.log("values in on finish", values);
    values.logo = values.logo.file ? values.logo.file.thumbUrl : values.logo;
    if (!values.logo) {
      //console.log("undefined");
      values.logo = "";
    }
    companydetails.mutate({
      companyDetails: {
        address: {
          address1: values.address1,
          address2: values.address2,
          city: values.city,
          country: values.country,
          postcode: values.postcode,
          state: values.state,
        },
        brandName: values.brand_name,
        email: values.email,
        legalNameForBusiness: values.legalNameForBusiness,
        logo: values.logo,
        phone: values.phone,
        website: values.website,
        additionalText: values.additionalText,
      },
    });
  }

  useEffect(() => {
    form.resetFields();
  }, [initialValues]);

  console.log("initial value", initialValues);

  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
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
          return <Savebar style={{}} loading={companydetails.isLoading} />;
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
          <SettingsTitlebar name={"Company Details"} />
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
                alignSelf: "center",
                flexDirection: "column",
                display: "flex",
                maxWidth: "27rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Company Details</span>
              <span>
                Choose what information you want to show in the company details
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  //maxWidth: "27rem",
                  alignSelf: "center",
                  padding: "1rem",
                  border: "solid",
                  borderRadius: "0.1rem",
                  borderColor: "lightgray",
                }}
              >
                <Form.Item
                  label="Brand name"
                  name="brand_name"
                  style={{ fontWeight: "bold" }}
                >
                  <Input value={initialValues.brand_name} />
                </Form.Item>
                <Form.Item
                  label="Legal name of business"
                  style={{ fontWeight: "bold" }}
                  name="legalNameForBusiness"
                >
                  <Input value={initialValues.legalNameForBusiness} />
                </Form.Item>
                <Form.Item
                  label="Company website"
                  style={{ fontWeight: "bold" }}
                  name="website"
                >
                  <Input value={initialValues.website} />
                </Form.Item>
                <Form.Item
                  label="Company support email id"
                  style={{ fontWeight: "bold" }}
                  name="email"
                >
                  <Input value={initialValues.email} />
                </Form.Item>
                <Form.Item
                  name="logo"
                  label="Upload your logo (optional)"
                  extra="png, jpeg, jpg, gif having max 250x125px (100KB limit)"
                  style={{ fontWeight: "bold" }}
                >
                  <Upload
                    //name="logo"
                    // action="/upload.do"
                    listType="picture"
                    maxCount={1}
                    beforeUpload={beforeUpload}
                    defaultFileList={
                      initialValues.logo !== "" &&
                      initialValues.logo !== undefined &&
                      initialValues.logo !== null
                        ? [{ url: initialValues.logo }]
                        : []
                    }
                    showUploadList={msgerror == "" ? true : false}
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  label="Phone"
                  style={{ fontWeight: "bold" }}
                  name="phone"
                >
                  <Input value={initialValues.phone} />
                </Form.Item>
                <Form.Item
                  label="Street"
                  style={{ fontWeight: "bold" }}
                  name="address2"
                >
                  <Input value={initialValues.address2} />
                </Form.Item>
                <Form.Item
                  label="Apartment, suite, etc. (optional)"
                  style={{ fontWeight: "bold" }}
                  name="address1"
                >
                  <Input value={initialValues.address1} />
                </Form.Item>
                <Form.Item
                  label="City"
                  name="city"
                  style={{ fontWeight: "bold" }}
                >
                  <Input value={initialValues.city} />
                </Form.Item>
                <Form.Item
                  label="Postal/Zip code"
                  name="postcode"
                  style={{ fontWeight: "bold" }}
                >
                  <Input value={initialValues.postcode} />
                </Form.Item>
                <Form.Item
                  label="Country/Region"
                  name="country"
                  style={{ fontWeight: "bold" }}
                >
                  <Input value={initialValues.country} />
                </Form.Item>
                <Form.Item
                  label="State"
                  name="state"
                  style={{ fontWeight: "bold" }}
                >
                  <Input value={initialValues.state} />
                </Form.Item>
                <Form.Item
                  label="Additional Info"
                  style={{ fontWeight: "bold" }}
                  name="additionalText"
                >
                  <Input.TextArea value={initialValues.additionalText} />
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

// status of upload logo
