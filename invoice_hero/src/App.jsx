import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import { useState } from "react";
import { Grid, Row, Col } from "antd";
import Note from "./Components/Note";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [note, setnote] = useState([]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(note, result.source.index, result.destination.index);
    console.log(items);
    setnote(items);
  }

  return (
    <div>
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <CreateNote collapsed={collapsed} note={note} setnote={setnote} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ marginLeft: 256 }}>
          <div className="site-card-wrapper">
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Row
                  gutter={16}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {note
                    ? note.map((note, index) => (
                        <Draggable
                          key={note.id}
                          draggableId={note.id.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Col
                              span={8}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Note title={note.title} content={note.content} />
                              <div>note id:{note.id}</div>
                            </Col>
                          )}
                        </Draggable>
                      ))
                    : null}
                </Row>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
