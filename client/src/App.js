import React from 'react';
import {useState, useEffect} from 'react'
const ethers = require("ethers")
import abi from "./contracts/defi.json"
import Buy from './components/Buy.js';
import Memos from './components/Memos.js';


import './App.css';

function App() {
  const [state,setState] = useState(
    {
      provider: null,
      signer:null,
      contract:null
    }
  )

  useEffect(()=>{
    alert(React)
    const connectWallet = async()=>{
       const contractAddress= process.env.CONTRACT_ADDRESS;
       const contractAbi = abi.abi;

       try {
        const {ethereum}=window;

        if(ethereum){
          const account = await ethereum.request(
           {method: 'eth_requestAcccounts'}
          )
        }
        const provider= new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract= new ethers.Contract(contractAddress, contractAbi, signer)
        setState({
          provider, signer, contract
        })
       }catch(error) {
         console.log(error)
       }
    }
  })
  return (
    <div className="App">
    <Buy state={state}/>
    <Memos state={state}/>
    </div>
  );
}

export default App;
