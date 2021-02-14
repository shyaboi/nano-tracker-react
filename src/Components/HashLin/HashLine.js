import { Hash } from "crypto";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Progress } from "reactstrap";
import {ResponsiveContainer, ComposedChart, LineChart,Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
let gData = [
    {name:"b",uv:200, pv:200},{name:"b",uv:200, pv:200},{name:"b",uv:200, pv:200},{name:"b",uv:200, pv:200},{name:"b",uv:200, pv:200},{name:"b",uv:200, pv:200},{name:"b",uv:200, pv:200},{name:"b",uv:200, pv:200},];
    
    let Updater
    const HashLine = () =>{ 
        const [GgData, setGData] = useState([])
        const [updateInterval, setUpdateInterval] = useState(0)
        const [windowHeight, setWindowHeight] = useState(50)
        
        function handleResize() {
            setWindowHeight(window.innerHeight -50)}
        useEffect(() => {
            setGData(gData)
            handleResize()
        })
            window.addEventListener('resize', handleResize)

const fetchy = async (address) => {
    let res = await fetch(
        `https://api.nanopool.org/v1/eth/balance_hashrate/${address}`
        );
        let data = await res.json();
        return data;
    };
const beef = (b)=> {
    return b
}
    console.log()
    let updateLine = ()=> {
        fetchy("0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861").   then(async (data) => {

            let pData =await data.data
            let bal =await pData.balance
            let hashTotal =await pData.hashrate
            console.log(hashTotal)
            gData.push({name:hashTotal,uv:hashTotal,pv:150,amt:2222})
            let dataG = gData.map(beef)   
            if(dataG.length>8){
                gData.shift()
                setGData(dataG)
            }         
            setGData(dataG)
        });
    }




    let startTick=() =>{
        if(!updateInterval){
            console.log('clicked')
            Updater = setInterval(updateLine,1000)
            setUpdateInterval(1)
        }


}    
let stopTick=() =>{
    console.log('clicked pause')
    if(updateInterval){
        console.log('pause')
        clearInterval(Updater)
        setUpdateInterval(0)
    }
} 
    
    return(
<Container fluid>       
        <ResponsiveContainer  width="100%" height={windowHeight} >
        <ComposedChart  data={GgData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv"  stroke="#8884d8" fill="#82ca9d"/>
        <Line type="monotone" dataKey="pv"  stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </ComposedChart>
</ResponsiveContainer>
        <Legend />
<Button onClick={startTick}>Start Updates</Button>
<Button onClick={stopTick}>Stop Updates</Button>
</Container>
)};

export default HashLine