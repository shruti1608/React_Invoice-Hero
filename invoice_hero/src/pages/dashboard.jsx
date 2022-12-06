import Container from "../components/Container";
import Footerlayout from "../components/Footer";
import Header from "../components/Header";
import { useState, Suspense } from "react";
import TmpHeader from "../components/TmpHeader";
import { Skeleton } from "antd";
export default function Dashboard() {
  const [chooseheader, setchooseheader] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return (
    <div>
      {chooseheader ? (
        <TmpHeader
          selectedRowKeys={selectedRowKeys}
          setSelectedRowKeys={setSelectedRowKeys}
          setchooseheader={setchooseheader}
        />
      ) : (
        <Header />
      )}
      <Suspense fallback={<Skeleton active />}>
        <Container
          chooseheader={chooseheader}
          setchooseheader={setchooseheader}
          selectedRowKeys={selectedRowKeys}
          setSelectedRowKeys={setSelectedRowKeys}
        />
      </Suspense>

      <Footerlayout />
    </div>
  );
}
