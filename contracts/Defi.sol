// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract defi{

   struct Memo{
    string name;
    string message;
    uint timestamp;
    address from;
   }

   Memo[] memos;

   address payable owner;

   constructor(){
    owner= payable(msg.sender);
   }

   function send(string memory name, string memory message) public payable{
     require(msg.value>0, "please pay non-zero value");
     owner.transfer(msg.value);
     memos.push(Memo(name, message, block.timestamp, msg.sender));
   }

   function getMemos() public view returns (Memo[] memory){
    return memos;
   }


}