import { Row, Card, Col, Checkbox } from "antd";

export default function Note({ title, content }) {
  console.log("content", content, title.title);
  return (
    // <Col span={8}>
    <Card title={title?.map((title) => title.title)} bordered={false}>
      {content
        ? content.map((note) => {
            return (
              <div>
                <Checkbox>{note.content}</Checkbox>
              </div>
            );
          })
        : null}
    </Card>
    //  </Col>
  );
}
