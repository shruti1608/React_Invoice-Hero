import { Drawer, Button, Menu, DatePicker, Select, Checkbox } from "antd";

export default function Morefilters({ visible, setvisible }) {
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
            <DatePicker.RangePicker mode={"inline"} />
          </Menu.SubMenu>
          <Menu.SubMenu title="Payment status" key="Payment status">
            <Select defaultValue="Select Value" size="middle">
              <Option value="Pending">
                <Checkbox value="Pending">Pending</Checkbox>
              </Option>
              <Option value="Voided">Voided</Option>
              <Option value="Partially Paid">Partially Paid</Option>
              <Option value="Authorized">Authorized</Option>
              <Option value="Refunded">Refunded</Option>
              <Option value="Partially Refunded">Partially Refunded</Option>
              <Option value="Paid">Paid</Option>
            </Select>
          </Menu.SubMenu>
          <Menu.SubMenu title="Fulfillment status" key="Fulfillment status">
            <Select defaultValue="Select Value" size="middle">
              <Option value="Select Value">Select Value</Option>
              <Option value="Sent">Sent</Option>
              <Option value="Draft">Draft</Option>
            </Select>
          </Menu.SubMenu>
          <Menu.SubMenu title="Order status" key="Order status"></Menu.SubMenu>
        </Menu>
      </Drawer>
    </div>
  );
}
