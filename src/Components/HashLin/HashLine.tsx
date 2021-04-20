//import react
import React, { useEffect, useState } from "react";
//import componenets from react strap
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
//progress bar from react strap
import { Progress } from "reactstrap";
//importing componenets from rrecharts
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
//make global gData array var
let gData:any = [];
//declare updatrer
let Updater:any;
//initiate hashline function
const HashLine = () => {
  //setting states
  //set globaldata
  const [GgData, setGData] = useState([]);
  //update interval t/f state
  const [updateInterval, setUpdateInterval] = useState(0);
  //windows height state
  const [windowHeight, setWindowHeight] = useState(50);
  //progres bar state
  const [prog, setProg] = useState(50);
  //dropdown state
  const [dropdownOpen, setOpen] = useState(false);
  //interval state
  const [intervalSet, setInter] = useState(10000);
  //workers state array
  const [workers, setWorkers] = useState([]);
//dropdown toggle
  const toggle = () => setOpen(!dropdownOpen);
//resizeeing the windows based on the live window height
  function handleResize() {
    setWindowHeight(window.innerHeight - 200);
  }
  useEffect(() => {
    setGData(gData);
    handleResize();
  });
  window.addEventListener("resize", handleResize);

  //setting up async fetch function for 
  const fetchy = async (address:string) => {
    let res = await fetch(address);
    let data = await res.json();
    return data;
  };
  //setup function to return its param(setup later for mutated map)
  const beef = (b:any) => {
    return b;
  };
//setting up global vars for the update line func to retun to for easy parsing
  let pData
  let bal:number
  let hashTotal:number
  let rigz
  let w:any = []

  //setting up update link function
  let updateLine = () => {
    //fetch to nano api for bal and hash
    fetchy(`https://api.nanopool.org/v1/eth/balance_hashrate/0xcf0dfcd5d4d2c8a18b9f06289e99363bba0b1f98`).then(async (data) => {
      //parse data  and assign vars async await
      pData = await data.data;
      bal = await pData.balance;
      hashTotal = await pData.hashrate;
    });
    //fetch to nano api for reported hasrates
    fetchy(`https://api.nanopool.org/v1/eth/reportedhashrates/0xcf0dfcd5d4d2c8a18b9f06289e99363bba0b1f98`).then(async (data) => {
      //parse data  and assign vars async await
      rigz = data.data
      w = []
      //for loop through data to push to workers state
      for (const i of rigz) {
        w.push(i.hashrate)
      }
      setWorkers(w)
  })
    //fetch to nano api for reported hasrates
    fetchy(`https://api.nanopool.org/v1/eth/reportedhashrate/0xcf0dfcd5d4d2c8a18b9f06289e99363bba0b1f98`).then(async (data) => {
      //parse data  and assign vars async await
    let rHash = await data.data
    console.log(rHash)
    let aHash = (hashTotal + rHash) / 2
    //push async await data to gData array
    gData.push({ name: hashTotal, cHash: hashTotal, rHash: rHash, aHash:aHash});
    //set progress bar state to bal
    setProg(bal);
    //let data = map of gData
    let dataG = gData.map(beef);
    //limit the number of datapoints for the chart to 6
    if (dataG.length > 6) {
      //remove the 1st el in the array
      gData.shift();
      //set the g data state
      setGData(dataG);
    }
      //set the g data state
    setGData(dataG);
  })
  };


  //start the inteval button  tick function
  let startTick = () => {
    if (!updateInterval) {
      console.log("clicked");
      //name the interval and start updateline funtion
      Updater = setInterval(updateLine, intervalSet);
      //setinterval state to true
      setUpdateInterval(1);
    }
  };
  //stop interval button funtion
  let stopTick = () => {
console.log("clicked pause");
//if the update interval is true
    if (updateInterval) {
      //clear the interval
      console.log("pause");
      clearInterval(Updater);
      //setinterval state to false
      setUpdateInterval(0);
    }
  };
//change interval fucntion based on dropdown
  let changeInter = (e:any) => {
    //declare interval is the dropdown target *1000
      let interVal = e.target.value* 1000
      //set interval state to that val
        setInter(interVal)
      //clear the interval
      clearInterval(Updater)
    console.log(interVal)
    //set interval state to false
    setUpdateInterval(0);
    //set interval to named Updaters and run updateline set to interVal
    Updater = setInterval(updateLine, interVal);
    //set interval state to true
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
