import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useRef, useEffect } from "react";
import Note from "./Note";
import SideMenu from "./SideMenu";

export default function CreateNote({ collapsed, note, setnote }) {
  const [notecontent, setnotecontent] = useState([]);
  const [checkedcontent, setcheckedcontent] = useState([]);
  const [notetitle, setnotetitle] = useState([]);
  const [id, setid] = useState(0);
  const [expand, setExpand] = useState(false);
  const [showlist, setshowlist] = useState(false);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      console.log("clicked outside");
      setExpand(false);
    } else {
      console.log("click inside");
      setExpand(true);
    }
  };

  function inputevent(e) {
    // const { name, value } = e.target;
    // setnote([...note, { [name]: value }]);
    // setnote((prev) => {
    //   return { ...prev, [name]: value };
    // });
    //setshowlist(false);
  }
  function onpressenter(e) {
    // const { name, value } = e.target;

    setnotecontent([...notecontent, { content }]);

    setcontent(" ");
    setshowlist(true);
  }

  function ontitlepressenter() {
    setnotetitle([{ title: title }]);
    //settitle("");
  }
  function onbuttonclicked() {
    setExpand(false);
    setid(id + 1);
    settitle("");
    setnote([...note, { title: notetitle, content: notecontent, id: id }]);
    setnotetitle([]);
    setnotecontent([]);
  }
  function onchangecheckbox(e, idx) {
    console.log(e.target.checked, idx, e, notecontent[idx]);
    var array = notecontent[idx];
    setcheckedcontent([...checkedcontent, { e }]);
    console.log(array);
  }

  function handlekey(e) {
    if (e.key == "Enter" && e.shiftKey) {
      console.log("enter+shift", e.target.value);
    }
    if (e.key == "Enter") {
      onpressenter();
    }
  }
  console.log("note", note, "notecontent", notecontent);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <SideMenu collapsed={collapsed} />
      </div>
      <div
        ref={refOne}
        style={{
          marginTop: "2rem",
          marginLeft: "4rem",
        }}
      >
        {expand ? (
          <>
            <div
              style={{
                width: "40rem",
                borderStyle: "ridge",

                borderColor: "lightblack",
              }}
            >
              <Input
                placeholder="Title"
                value={title}
                name="title"
                onChange={(e) => settitle(e.target.value)}
                onPressEnter={ontitlepressenter}
                style={{
                  width: "40rem",
                  borderColor: "white",
                  borderRadius: 0,
                }}
                size="large"
              />

              <Input.TextArea
                placeholder=" List item"
                autoFocus="true"
                value={content}
                name="content"
                onChange={(e) => setcontent(e.target.value)}
                style={{
                  width: "40rem",
                  borderColor: "white",
                  borderRadius: 0,
                  borderStyle: "solid",
                }}
                bordered="false"
                //onPressEnter={onpressenter}
                onKeyDown={handlekey}
              />

              {showlist && notecontent
                ? notecontent.map((note, idx) => {
                    return (
                      <div>
                        <Checkbox
                          //key={note.id}
                          onChange={(e) => onchangecheckbox(e, idx)}
                        >
                          {note.content}
                        </Checkbox>
                      </div>
                    );
                  })
                : null}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "1rem",
                }}
              >
                <Button type="text" onClick={onbuttonclicked}>
                  <span style={{ fontWeight: "bold" }}>close</span>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <Input
            placeholder={expand ? " List item" : "Take a note..."}
            style={{ width: "40rem" }}
            size="large"
            onClick={() => setExpand(true)}
          />
        )}
      </div>
    </div>
  );
}
