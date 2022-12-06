import { Button, DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Morefilters from "../components/Morefilters";

export default function Searchbar({
  onChange,
  filter,
  // limit, setlimit
}) {
  const { Option } = Select;
  const [visible, setvisible] = useState(false);
  //const [searchText, setSearchtext] = useState("");
  //const [limit, setlimit] = useState(25);

  function openDrawer() {
    setvisible(true);
    console.log("visible", visible);
  }
  function searchtextchange(e) {
    // setSearchtext(e.target.value);
    // console.log("clear", e.target.value, "+", searchText);
    onChange({ searchText: e.target.value });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <Input.Group compact>
          <Input
            prefix={<SearchOutlined />}
            allowClear
            placeholder=" Search by order number or customer name"
            size="large"
            style={{ width: "45rem" }}
            value={filter.searchText}
            onChange={searchtextchange}
            // onPressEnter={() => {
            //   //api call
            // //  console.log(searchText);
            //   onChange({ searchText : });
            // }}
            onChangeCapture={() => console.log("change capture")}
          />
          <DatePicker.RangePicker
            placeholder="Date"
            style={{ width: "7rem" }}
            size="large"
            allowClear={true}
            allowEmpty={[true, true]}
            value={filter.dateFilter}
            // onChange={(value, dateString) => {
            //   console.log("Selected Time: ", value);
            // }}
            onCalendarChange={(value) => {
              // let arr, arr1;
              // if (value != null && value[0] != null) {
              //   arr = value[0].$d.toString();
              //   arr = arr.split("+").slice(0, 1).join(" ").split(" ");
              //   arr = arr[0] +", " +arr[2] +" " +arr[1] +" " +arr[3] +" " +arr[4] +" " +arr[5];
              // }
              onChange({ dateFilter: value || [] });
            }}
          />

          <Button
            type="primary"
            size="middle"
            style={{ height: "2.5rem" }}
            onClick={openDrawer}
          >
            More filters
          </Button>
        </Input.Group>
      </div>

      <div style={{ marginLeft: "1rem" }}>
        <Select
          size="large"
          value={filter.limit}
          // defaultValue="25"
          onChange={(value) => {
            onChange({ limit: value });
            console.log("selectbox value", value);
          }}
          // onSelect={
          //   sectvaluechange
          //   //   (value) => {
          //   //   console.log("onselect", value);
          //   //   setTimeout(() => {
          //   //     onChange({ searchText, limit });
          //   //   }, 30);
          //   // }
          // }
        >
          <Option value="25">25</Option>
          <Option value="50">50</Option>
          <Option value="75">75</Option>
          <Option value="100">100</Option>
        </Select>
      </div>
      <Morefilters
        visible={visible}
        setvisible={setvisible}
        filter={filter}
        onChange={onChange}
      />
    </div>
  );
}
