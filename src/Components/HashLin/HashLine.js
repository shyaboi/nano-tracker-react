import { Hash } from "crypto";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Progress } from "reactstrap";
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  Area,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
let gData = [
  { name: "b", uv: 200, pv: 200 },
  { name: "b", uv: 200, pv: 200 },
  { name: "b", uv: 200, pv: 200 },
  { name: "b", uv: 200, pv: 200 },
  { name: "b", uv: 200, pv: 200 },
  { name: "b", uv: 200, pv: 200 },
  { name: "b", uv: 200, pv: 200 },
  { name: "b", uv: 200, pv: 200 },
];
let Updater;
const HashLine = () => {
  const [GgData, setGData] = useState([]);
  const [updateInterval, setUpdateInterval] = useState(0);
  const [windowHeight, setWindowHeight] = useState(50);
  const [prog, setProg] = useState(50);
  const [dropdownOpen, setOpen] = useState(false);
  const [intervalSet, setInter] = useState(1000);

  const toggle = () => setOpen(!dropdownOpen);

  function handleResize() {
    setWindowHeight(window.innerHeight - 100);
  }
  useEffect(() => {
    setGData(gData);
    handleResize();
  });
  window.addEventListener("resize", handleResize);

  const fetchy = async (address) => {
    let res = await fetch(
      `https://api.nanopool.org/v1/eth/balance_hashrate/${address}`
    );
    let data = await res.json();
    return data;
  };
  const beef = (b) => {
    return b;
  };
  console.log();
  let updateLine = () => {
    fetchy("0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861").then(async (data) => {
      let pData = await data.data;
      let bal = await pData.balance;
      let hashTotal = await pData.hashrate;
      console.log(hashTotal);
      gData.push({ name: hashTotal, uv: hashTotal, pv: 150 });
      setProg(bal);
      let dataG = gData.map(beef);
      if (dataG.length > 8) {
        gData.shift();
        setGData(dataG);
      }
      setGData(dataG);
    });
  };

  let startTick = () => {
    if (!updateInterval) {
      console.log("clicked");
      Updater = setInterval(updateLine, intervalSet);
      setUpdateInterval(1);
    }
  };
  let stopTick = () => {
    console.log("clicked pause");
    if (updateInterval) {
      console.log("pause");
      clearInterval(Updater);
      setUpdateInterval(0);
    }
  };

  let changeInter = (e) => {
      let interVal = e.target.value* 1000
        setInter(interVal)
      clearInterval(Updater)
    console.log(interVal)
    setUpdateInterval(0);
    Updater = setInterval(updateLine, interVal);
    };

  return (
    <Container fluid>
      <div className="text-center">
        Current bal ={prog}ETH | {0.1 - prog} ETH until deposit |{" "}
        {Math.round(prog * 1000)}% there
      </div>
      <Progress value={prog * 1000} />
      <ResponsiveContainer width="100%" height={windowHeight}>
        <ComposedChart
          data={GgData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#82ca9d" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
      <Legend />
      <Button onClick={startTick}>Start Updates</Button>
      <Button onClick={stopTick}>Pause Updates</Button>
      <ButtonDropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{intervalSet}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value={2} onClick={(e) => changeInter(e)}>2</DropdownItem>
          <DropdownItem value={3} onClick={(e) => changeInter(e)}>3</DropdownItem>
          <DropdownItem value={4} onClick={(e) => changeInter(e)}>4</DropdownItem>
          <DropdownItem value={5} onClick={(e) => changeInter(e)}>5</DropdownItem>
          <DropdownItem value={6} onClick={(e) => changeInter(e)}>6</DropdownItem>
          <DropdownItem value={7} onClick={(e) => changeInter(e)}>7</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </Container>
  );
};

export default HashLine;
