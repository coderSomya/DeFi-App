import React from 'react'
const ethers = require("ethers");

import "./Buy.css"

const Buy= ({state}) => {

    const buyEth= async(e)=>{
        e.preventDefault()
        const {contract} = state;
        const name= document.querySelector("#name").value;
        const message= document.querySelector("#message").value;
        const amount = {value: ethers.utils.parseEther("0.001")}
        const transaction = await contract.send(name, message, amount);
        await transaction.wait();
        alert("transaction is done");
    }
   


  return (
    <>
    <center> Send me tokens via blockchain 😊 </center>
    <form id="app_form" action="" onSubmit={buyEth}>
        <label className= "name_label" htmlFor="">name</label>
        <input className="name_input" type="text" id="name" placeholder='enter your name' />
        <label className= "message_label" htmlFor="">Message</label>
        <input className="message_input" type="text" id="message" placeholder='enter your message' />
        <button id='submit_send'>Submit</button>
    </form>
    </>
  )
}

export default Buy