import { Table, Space, Select, Typography } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Tablelist({ order, onChange, limit, setlimit }) {
  //console.log(order, "table");
  const [sortBy, setsortBy] = useState("");
  const [OrderBy, setorderBy] = useState("");
  const { Option } = Select;
  const columns = [
    {
      title: "Invoice",
      dataIndex: "orderNum",
      key: "orderNum",
      sorter: (a, b, sortOrder) => {
        //console.log(a.orderNum, b.orderNum, "sortOrder - " + sortOrder, "sort");

        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("orderNo");
        onChange({ sortBy, OrderBy });
      },
      sortDirections: ["descend", "ascend"],
      render: (_, record) => (
        <a>
          {record.orderNum}
          <ExportOutlined style={{ paddingLeft: "0.2rem" }} />
        </a>
      ),
    },
    {
      title: "Order",
      dataIndex: "Order",
      key: "Order",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b, sortOrder) => {
        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("shopifyOrderNo");
        onChange({ sortBy, OrderBy });
      },
      render: (_, record) => (
        <>
          {record.orderNum == record.shopifyOrderNum ? (
            <span>-</span>
          ) : (
            <span>{record.shopifyOrderNum}</span>
          )}
        </>
      ),
    },
    {
      title: "Date",
      dataIndex: "invoiceDate",
      key: "invoiceDate",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b, sortOrder) => {
        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("invoiceDate");
        onChange({ sortBy, OrderBy });
      },
      render: (_, record) => {
        let arr = new Date(record.invoiceDate).toDateString().split(" ");
        arr.splice(0, 1);
        return (
          <>
            <div>{arr[1] + " " + arr[0] + " " + arr[2]}</div>
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "customerName",
      key: "customerName",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b, sortOrder) => {
        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("customerName");
        onChange({ sortBy, OrderBy });
      },
      render: (_, record) => {
        return (
          <>
            {record.customerName ? (
              <div>{record.customerName}</div>
            ) : (
              <div>-</div>
            )}
          </>
        );
      },
    },
    {
      title: "Total",
      dataIndex: "totalAmount",
      key: "totalAmount",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b, sortOrder) => {
        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("total");
        onChange({ sortBy, OrderBy });
      },
    },
    {
      title: "Payment",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b, sortOrder) => {
        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("paymentStatus");
        onChange({ sortBy, OrderBy });
      },
      render: (_, record) => (
        <Space size="middle">
          <div
            style={{
              backgroundColor:
                record.paymentStatus === "pending" ? "#ffc58b" : "#c4cdd5",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            {record.paymentStatus}
          </div>
        </Space>
      ),
    },
    {
      title: "Fulfillment",
      dataIndex: "fulfillmentStatus",
      key: "fulfillmentStatus",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b, sortOrder) => {
        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("fulfillmentStatus");
        onChange({ sortBy, OrderBy });
      },
      render: (_, record) => (
        <Space size="middle">
          <div
            style={{
              backgroundColor:
                record.fulfillmentStatus === "unfulfilled"
                  ? "#ffea8a"
                  : "#c4cdd5",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            {record.fulfillmentStatus}
          </div>
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b, sortOrder) => {
        sortOrder === "descend" ? setorderBy("desc") : setorderBy("asc");

        setsortBy("status");
        onChange({ sortBy, OrderBy });
      },
      render: (_, record) => (
        <Space size="middle">
          <div
            style={{
              backgroundColor: record.status === "Sent" ? "#bbe5b3" : "#c4cdd5",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            {record.status}
          </div>

          <Select
            size="small"
            placeholder="Action"
            dropdownMatchSelectWidth={false}
          >
            <Option value="View the invoice">View the invoice</Option>
            <Option value="Resend the invoice to the customer">
              Resend the invoice to the customer
            </Option>
            <Option value="Regenrate">Regenrate</Option>
          </Select>
        </Space>
      ),
    },
  ];
  // console.log("sortby - " + sortBy, "orderby - " + OrderBy);
  return (
    <div
      style={{
        marginLeft: "10rem",
        marginRight: "10rem",
        marginTop: "2rem",
      }}
    >
      <Table
        columns={columns}
        dataSource={order}
        bordered={true}
        showSorterTooltip={false}
        pagination={{
          pageSize: parseInt(limit),
          total: 31,
          hideOnSinglePage: true,
          onChange: (page) => {
            // console.log("pageno", page);
            onChange({ page });
          },
        }}
        rowSelection={{
          type: "checkbox",
          getCheckboxProps(record) {
            return { name: record.name };
          },
        }}
      />
    </div>
  );
}
