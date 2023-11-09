// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DappContract {
    uint public counter;

    constructor() {
        counter = 0; // Initialize the counter to 0 when the contract is deployed
    }

    function incrementCounter() public {
        counter += 1;
    }
}
