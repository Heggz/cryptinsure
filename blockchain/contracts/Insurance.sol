pragma solidity ^0.4.4;

contract Insurance {

  address ownerAddress;
  address receiverAddress;

  function Insurance(address owner, address receiver) {
    // constructor
    ownerAddress = owner;
    receiverAddress = receiver;
  }
  
}
