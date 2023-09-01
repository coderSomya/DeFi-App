import React from 'react'

const Buy= ({state}) => {

    const buyEth= async(e)=>{
        e.preventDefault()
        const {contract} = state;
        const name= document.querySelector("#name").value;
        const message= document.querySelector("#message").value;

    }
   


  return (
    <>
    <form action="" onSubmit={buyEth}>
        <label htmlFor="">name</label>
        <input type="text" id="name" placeholder='enter your name' />
        <label htmlFor="">Message</label>
        <input type="text" id="message" placeholder='enter your message' />
        <button>Submit</button>
    </form>
    </>
  )
}

export default Buy