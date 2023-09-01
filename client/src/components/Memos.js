import React from 'react'
import { useState, useEffect } from 'react'
import "./Memos.css"

const Memos = ({state}) => {
    const [memos, setMemos] = useState([]);
    const {contract} = state;

    useEffect(()=>{
        const memosMessage = async ()=>{
            const memos = await contract.getMemos();
          setMemos(memos)
        }
        contract && memosMessage();
    }, [])
    return (
    <>

    <p>
        Messages
    </p>
    {
 memos.map((memo)=>{
    return(
        <table className="memo_table" key={memo.timestamp}>
         <tbody className="memo_tbody">
            <tr className="memo_table_row">
                <td>{memo.name}</td>
                <td>{String(memo.timestamp)}</td>
                <td>{memo.from}</td>
                <td>{memo.message}</td>
            </tr>
         </tbody>
        </table>
    )
 })
    }
    </>
   )
}

export default Memos