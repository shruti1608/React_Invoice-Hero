import { Button, DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Morefilters from "../components/Morefilters";

export default function Searchbar({ onChange, limit, setlimit }) {
  const { Option } = Select;
  const [visible, setvisible] = useState(false);
  const [searchText, setSearchtext] = useState("");
  //const [limit, setlimit] = useState(25);

  function openDrawer() {
    setvisible(true);
    console.log("visible", visible);
  }
  function searchtextchange(e) {
    setSearchtext(e.target.value);
    console.log("clear", e.target.value, "+", searchText);
    onChange({ searchText, limit });
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
            value={searchText}
            onChange={searchtextchange}
            onPressEnter={() => {
              //api call
              console.log(searchText);
              onChange({ searchText, limit });
            }}
            onChangeCapture={() => console.log("change capture")}
          />
          <DatePicker.RangePicker
            placeholder="Date"
            style={{ width: "7rem" }}
            size="large"
            allowClear={true}
            // onChange={(value, dateString) => {
            //   console.log("Selected Time: ", value);
            // }}
            onCalendarChange={(value) => {
              // console.log(
              //   "calenderchange",
              //   value[0].$d,
              //   value[1],
              //   toString("value[0].$d")
              // );
              let arr, arr1;
              if (value != null && value[0] != null) {
                arr = value[0].$d.toString();
                arr = arr.split("+").slice(0, 1).join(" ").split(" ");
                arr =
                  arr[0] +
                  ", " +
                  arr[2] +
                  " " +
                  arr[1] +
                  " " +
                  arr[3] +
                  " " +
                  arr[4] +
                  " " +
                  arr[5];
              }
              if (value != null && value[1] != null) {
                arr1 = value[1].$d.toString();
                arr1 = arr1.split("+").slice(0, 1).join(" ").split(" ");
                arr1 =
                  arr1[0] +
                  ", " +
                  arr1[2] +
                  " " +
                  arr1[1] +
                  " " +
                  arr1[3] +
                  " " +
                  arr1[4] +
                  " " +
                  arr1[5];
              }
              onChange({ startDate: arr, endDate: arr1 });
              console.log("array1", arr);
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
          value={limit}
          // defaultValue="25"
          onChange={(value) => {
            setlimit(value);
            onChange({ limit });
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
      <Morefilters visible={visible} setvisible={setvisible} />
    </div>
  );
}
