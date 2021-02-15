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
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
let gData:any = [
 
];
let Updater:any;
const HashLine = () => {
  const [GgData, setGData] = useState([]);
  const [updateInterval, setUpdateInterval] = useState(0);
  const [windowHeight, setWindowHeight] = useState(50);
  const [prog, setProg] = useState(50);
  const [dropdownOpen, setOpen] = useState(false);
  const [intervalSet, setInter] = useState(10000);
  const [workers, setWorkers] = useState([]);

  const toggle = () => setOpen(!dropdownOpen);

  function handleResize() {
    setWindowHeight(window.innerHeight - 200);
  }
  useEffect(() => {
    setGData(gData);
    handleResize();
  });
  window.addEventListener("resize", handleResize);

  const fetchy = async (address:string) => {
    let res = await fetch(address);
    let data = await res.json();
    return data;
  };
  const beef = (b:any) => {
    return b;
  };

  let pData
  let bal:number
  let hashTotal:number
  let rigz
  let w:any = []
  let updateLine = () => {
    fetchy(`https://api.nanopool.org/v1/eth/balance_hashrate/0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861`).then(async (data) => {
      pData = await data.data;
      bal = await pData.balance;
      hashTotal = await pData.hashrate;
    });
    fetchy(`https://api.nanopool.org/v1/eth/reportedhashrates/0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861`).then(async (data) => {
      rigz = data.data
      w = []
      for (const i of rigz) {
        w.push(i.hashrate)
      }
      setWorkers(w)
  })

    fetchy(`https://api.nanopool.org/v1/eth/reportedhashrate/0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861`).then(async (data) => {
    let rHash = await data.data
    console.log(rHash)
    let aHash = (hashTotal + rHash) / 2
    gData.push({ name: hashTotal, cHash: hashTotal, rHash: rHash, aHash:aHash});
    // console.log(gData)
    setProg(bal);
    let dataG = gData.map(beef);
    if (dataG.length > 6) {
      gData.shift();
      setGData(dataG);
    }
    setGData(dataG);
  })
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

  let changeInter = (e:any) => {
      let interVal = e.target.value* 1000
        setInter(interVal)
      clearInterval(Updater)
    console.log(interVal)
    setUpdateInterval(0);
    Updater = setInterval(updateLine, interVal);
    setUpdateInterval(1);
    
  };
  
  return (
    <Container fluid> 
    <Row>
      <Col className="text-center">
        Current Miner Balance ={prog}ETH | {0.1 - prog} ETH until deposit |{" "}
        {Math.round(prog * 1000)}% there
      <Progress value={prog * 1000} />
      </Col>
      </Row>
      <Row>
      <Col className="text-center">
        Worker HashRates
        </Col></Row>
      <Progress multi>
        <Progress bar striped color ="info"value={workers[0]}>Beasty {workers[0]} M/H </Progress>
        <Progress bar striped color="success" value={workers[1]}>Laptop {workers[1]} M/H </Progress>
        <Progress bar striped value={workers[2]}>MiniBoi {workers[2]} M/H </Progress>
        <Progress bar striped color="warning" value={workers[3]}>Ol' Miney {workers[3]} M/H</Progress>
        <Progress bar striped color="danger" value={workers[4]}>Ryzern {workers[4]} M/H</Progress>
      </Progress>
      <ResponsiveContainer width="100%" height={windowHeight}>
        <ComposedChart
          data={GgData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Area type="monotone" dataKey="cHash" stroke="#60BCB7" strokeWidth={5}  fill="#82ca9d"/>
          <Line type="monotone" dataKey="rHash" stroke="#8E5EA2" strokeWidth={5}  />
          <Line type="monotone" dataKey="aHash" stroke="#262335" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis type="number"/>
          <Tooltip />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
      <Row>
      <Button onClick={startTick}>Start Updates</Button>
      <Button onClick={stopTick}>Pause Updates</Button>
      <ButtonDropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{intervalSet/1000}Seconds</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value={2} onClick={(e) => changeInter(e)}>2</DropdownItem>
          <DropdownItem value={3} onClick={(e) => changeInter(e)}>3</DropdownItem>
          <DropdownItem value={4} onClick={(e) => changeInter(e)}>4</DropdownItem>
          <DropdownItem value={5} onClick={(e) => changeInter(e)}>5</DropdownItem>
          <DropdownItem value={10} onClick={(e) => changeInter(e)}>10</DropdownItem>
          <DropdownItem value={20} onClick={(e) => changeInter(e)}>20</DropdownItem>
          <DropdownItem value={25} onClick={(e) => changeInter(e)}>25</DropdownItem>
          <DropdownItem value={30} onClick={(e) => changeInter(e)}>30</DropdownItem>
          <DropdownItem value={35} onClick={(e) => changeInter(e)}>35</DropdownItem>
          <DropdownItem value={40} onClick={(e) => changeInter(e)}>40</DropdownItem>
          <DropdownItem value={45} onClick={(e) => changeInter(e)}>45</DropdownItem>
          <DropdownItem value={50} onClick={(e) => changeInter(e)}>50</DropdownItem>
          <DropdownItem value={55} onClick={(e) => changeInter(e)}>55</DropdownItem>
          <DropdownItem value={60} onClick={(e) => changeInter(e)}>60</DropdownItem>
     
        </DropdownMenu>
      </ButtonDropdown>
      </Row>
    </Container>
  );
};

export default HashLine;
