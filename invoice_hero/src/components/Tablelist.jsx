import { Table, Space, Select, Typography, Dropdown, Spin } from "antd";
import { ExportOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Tablelist({
  order,
  onChange,
  filter,
  totalorder,
  chooseheader,
  setchooseheader,
  selectedRowKeys,
  setSelectedRowKeys,
  isLoading,
}) {
  //console.log(order, "table");
  // console.log(totalorder, "totalorder");
  //const [sortBy, setsortBy] = useState("");
  //const [OrderBy, setorderBy] = useState("");
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    if (newSelectedRowKeys.length > 0) {
      setchooseheader(true);
    } else {
      setchooseheader(false);
    }
  };
  const items = [
    {
      label: "View the invoice",
      key: "1",
    },
    {
      label: "Resend the invoice to the customer",
      key: "2",
    },
    {
      label: "Regenrate",
      key: "3",
    },
  ];

  const { Option } = Select;
  const columns = [
    {
      title: "Invoice",
      dataIndex: "orderNum",
      key: "orderNum",
      sorter: (a, b, sortOrder) => {
        //console.log(a.orderNum, b.orderNum, "sortOrder - " + sortOrder, "sort");

        //sortOrder === "descend" ? OrderBy:"desc" : OrderBy:"asc";

        // setsortBy("orderNo");
        onChange({
          sortBy: "orderNo",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
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
        onChange({
          sortBy: "shopifyOrderNo",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
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
        onChange({
          sortBy: "invoiceDate",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
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
        onChange({
          sortBy: "customerName",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
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
        onChange({
          sortBy: "total",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
      },
    },
    {
      title: "Payment",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b, sortOrder) => {
        onChange({
          sortBy: "paymentStatus",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
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
        onChange({
          sortBy: "fulfillmentStatus",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
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
        onChange({
          sortBy: "status",
          OrderBy: sortOrder === "descend" ? "desc" : "asc",
        });
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
        </Space>
      ),
    },
    {
      // title: "Status",
      // dataIndex: "status",
      // key: "status",
      render: (_, record) => (
        <Space size="middle">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a>
              <Space>
                Action
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

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
        loading={isLoading}
        //rowKey={(record) => record.id}
        pagination={{
          pageSize: parseInt(filter.limit),
          total: parseInt(totalorder),
          hideOnSinglePage: true,
          onChange: (page) => {
            // console.log("pageno", page);
            onChange({ page });
          },
        }}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
      />
    </div>
  );
}
