import { Hash } from "crypto";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Progress } from "reactstrap";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
let gData = [
    {name:"b",uv:200},{name:"b",uv:200},{name:"b",uv:200},{name:"b",uv:200},{name:"b",uv:200},{name:"b",uv:200},{name:"b",uv:200},{name:"b",uv:200},];

let Updater
    const HashLine = () =>{ 
        const [GgData, setGData] = useState([])
        const [updateInterval, setUpdateInterval] = useState(0)
        
        useEffect(() => {
            setGData(gData)
})

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
            gData.push({name:"b",uv:hashTotal})
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
            Updater = setInterval(updateLine,3000)
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
        <Container>
        <LineChart width={900} height={500} data={GgData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
<Button onClick={startTick}>Start Updates</Button>
<Button onClick={stopTick}>Stop Updates</Button>
</Container>
)};

export default HashLine