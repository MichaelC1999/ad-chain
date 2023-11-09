const sender = Ethers.send("eth_requestAccounts", [])[0];

if (!sender) return <Web3Connect connectLabel="Connect with Web3" />;

State.init({
    executed: false,
});

const managerABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "txTarget",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "campaignsTokenIds",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "campaignsViewedCounters",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "functionData",
                "type": "bytes"
            }
        ],
        "name": "executionMiddleware",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

// Pass function call data thru props.calldata
// pass contract call target address thru props.target
// read ad view data
// call executionMiddleware(
//     address txTarget,
//     address[] memory campaignsViewedAddresses,
//     uint256[] memory campaignsViewedCounters,
//     bytes memory signature,
//     bytes memory functionData
// )
// 
const managerIface = new ethers.utils.Interface(managerABI);


const execution = () => {
    console.log(props)
    try {

        // const encoded = managerIface.encodeFunctionData("executionMiddleware", [props.target, [campaignIds], [campaignCounts], (ethers.utils.hexZeroPad(ethers.utils.hexlify(Number(0)), 32)), (ethers.utils.hexZeroPad(ethers.utils.hexlify(Number(0)), 32))]);
        // console.log('ADDRESSES', props.target, props.managerAddress, encoded)
        const currentViewCounter = Storage.get("viewCounter")

        console.log(currentViewCounter, 'storage')
        let campaignIds = [1]
        let campaignCounts = [1]
        if (currentViewCounter) {
            campaignIds = Object.keys(currentViewCounter).map(x => Number(x))
            campaignCounts = Object.values(currentViewCounter).map(x => Number(x))
        }

        const managerContract = new ethers.Contract(
            props.managerAddress,
            managerABI,
            Ethers.provider().getSigner()
        );

        console.log('TEST VALS', props.target,
            campaignIds,
            campaignCounts,
            (ethers.utils.hexZeroPad(ethers.utils.hexlify(Number(0)), 32)),
            (ethers.utils.hexZeroPad(ethers.utils.hexlify(Number(0)), 32)),
        )

        return managerContract.executionMiddleware(
            props.target,
            campaignIds,
            campaignCounts,
            (ethers.utils.hexZeroPad(ethers.utils.hexlify(Number(0)), 32)),
            (ethers.utils.hexZeroPad(ethers.utils.hexlify(Number(0)), 32)),
            {}
        ).then(returnData => {
            const decoded = managerIface.decodeFunctionResult(
                "executionMiddleware",
                returnData
            );
            console.log('RETURN VALUE FROM EXECUTE ROUTING:', decoded)
            State.update({
                executed: true
            })
            return decoded[0];
        })
    } catch (error) {
        console.log(error)
    }
};


// Read from state the transaction data to send
// Read from state the ad campaigns that have been shown and should have counts updated

// Take the transaction data and make a signer call, passing in the ad campaign info saved in state.
// The transactions must be routed through the manager contract
// Upon tx success, set state.viewCounter: {}

if (!state.executed) {
    execution()
}


return (
    <>
    </>);