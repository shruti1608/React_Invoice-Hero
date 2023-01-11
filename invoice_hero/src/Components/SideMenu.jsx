import { Menu } from "antd";
import {
  BulbOutlined,
  BellOutlined,
  EditOutlined,
  InboxOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
export default function SideMenu({ collapsed }) {
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        //defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        //style={{ width: 256 }}
        // items={items}
      >
        <Menu.Item icon={<BulbOutlined />} key="1">
          Notes
        </Menu.Item>
        <Menu.Item icon={<BellOutlined />} key="2">
          Remainders
        </Menu.Item>
        <Menu.Item icon={<EditOutlined />} key="3">
          Edit lables
        </Menu.Item>
        <Menu.Item icon={<InboxOutlined />} key="4">
          Archive
        </Menu.Item>
        <Menu.Item icon={<DeleteOutlined />} key="5">
          Trash
        </Menu.Item>
      </Menu>
    </div>
  );
}
