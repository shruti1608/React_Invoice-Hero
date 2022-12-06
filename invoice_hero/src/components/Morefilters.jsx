import { Drawer, Button, Menu, DatePicker, Select, Checkbox } from "antd";

export default function Morefilters({ visible, setvisible, filter, onChange }) {
  const { Option } = Select;
  return (
    <div>
      <Drawer
        visible={visible}
        onClose={() => setvisible(false)}
        placement="right"
        title="More filters"
        footer={<Button shape="round">clear all filters</Button>}
      >
        <Menu mode="inline">
          <Menu.SubMenu title="Date" key="Date">
            <DatePicker.RangePicker
              mode={"inline"}
              allowEmpty={[true, true]}
              value={filter.dateFilter}
              onCalendarChange={(value) =>
                onChange({ dateFilter: value || [] })
              }
            />
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Payment status"
            key="Payment status"
            onTitleClick={(selectedKeys) =>
              console.log("title clicked", selectedKeys)
            }
          >
            <Select
              mode="multiple"
              style={{ width: "95%" }}
              placeholder="Select Value"
              allowClear={true}
              onChange={(value, Option) => {
                console.log(value, Option);
                onChange({ paymentStatus: value });
              }}
            >
              <Option value="pending">Pending</Option>
              <Option value="voided">Voided</Option>
              <Option value="partially_paid">Partially Paid</Option>
              <Option value="authorized">Authorized</Option>
              <Option value="refunded">Refunded</Option>
              <Option value="partially_refunded">Partially Refunded</Option>
              <Option value="paid">Paid</Option>
            </Select>
          </Menu.SubMenu>
          <Menu.SubMenu title="Fulfillment status" key="Fulfillment status">
            <Select
              style={{ width: "95%" }}
              mode="multiple"
              placeholder="Select Value"
              allowClear={true}
              onChange={(value) => {
                onChange({ fulfillmentStatus: value });
              }}
            >
              <Option value="fulfilled">Fullfield</Option>
              <Option value="null">Unfulfilled</Option>
              <Option value="partial">Partially Fulfilled</Option>
              <Option value="restocked">Restocked</Option>
            </Select>
          </Menu.SubMenu>
          <Menu.SubMenu title="Mail status" key="Mail status">
            <Select
              style={{ width: "95%" }}
              placeholder="Select Value"
              allowClear={true}
              onChange={(value) => {
                onChange({ mail: value });
              }}
            >
              {/* <Option value="Select Value">Select Value</Option> */}
              <Option value="Sent">Sent</Option>
              <Option value="Draft">Draft</Option>
            </Select>
          </Menu.SubMenu>
          <Menu.SubMenu title="Order status" key="Order status">
            <Select
              style={{ width: "95%" }}
              placeholder="Select Value"
              allowClear={true}
              onChange={(value) => {
                onChange({ orderStatus: value });
              }}
            >
              {/* <Option value="Select Value">Select Value</Option> */}
              <Option value="open">Open</Option>
              <Option value="cancelled">Cancelled</Option>
            </Select>
          </Menu.SubMenu>
        </Menu>
      </Drawer>
    </div>
  );
}
