console.log('REACHED THE BOS COMP')
if (!props.managerAddress) return null;
const sender = Ethers.send("eth_requestAccounts", [])[0];

if (!sender) return <Web3Connect connectLabel="Connect with Web3" />;

const campaignABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const managerABI = [
  {
    "inputs": [],
    "name": "getRandomCampaignNFT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const managerIface = new ethers.utils.Interface(managerABI);
const campaignIface = new ethers.utils.Interface(campaignABI);

State.init({
  contentURI: "",
  campaignAddress: ""
});


const fetchAdCampaign = () => {
  try {
    const getCampaignSignature = "0x501172e9";

    return Ethers.provider().getSigner()
      .call({
        to: props.managerAddress,
        data: getCampaignSignature,
      })
      .then((campaignId) => {
        console.log('Returned campaign data', campaignId)
        const decoded = managerIface.decodeFunctionResult(
          "getRandomCampaignNFT",
          campaignId
        );
        console.log("SEPARATE CAMPAIGN CONTRACT", campaignId, decoded)
        State.update({
          campaignAddress: decoded[1]
        })
        return decoded[0];
      })
  } catch (error) {
    console.log(error)
  }
};

const fetchCampaignContent = (campaignNumber) => {
  try {

    const contentFunctionSignature = "0xc87b56dd" + (ethers.utils.hexZeroPad(ethers.utils.hexlify(Number(campaignNumber)), 32)).slice(2, 66)
    console.log(contentFunctionSignature, state.campaignAddress, 'func')

    // fetch to tokenURI passing in the token campaign number
    if (!state.campaignAddress) return null
    return Ethers.provider()
      .call({
        to: state.campaignAddress,
        data: contentFunctionSignature,
      })
      .then((content) => {
        const decoded = campaignIface.decodeFunctionResult(
          "tokenURI",
          content
        );
        return decoded[0];
      })
  } catch (error) {

  }
}
if (!state.contentURI) {
  fetchAdCampaign().then((campaignId) => {
    // Update view counter
    fetchCampaignContent(campaignId).then(contentURI => {
      State.update({
        ["contentURI"]: contentURI,
      });
      const currentViewCounter = Storage.get("viewCounter")
      let counter = 1;
      if (currentViewCounter[campaignId]) {
        counter = currentViewCounter[campaignId] + 1;
      }
      const viewCounterObj = {
        [campaignId]: counter
      }
      console.log('setting: ', viewCounterObj)
      Storage.set("viewCounter", viewCounterObj)
    })
  });
}

// Return displays the image element, with props for styling
console.log('RENDERING: ', state.contentURI)

return (
  <>
    {state.contentURI?.length > 0 ? <img src={state.contentURI} /> : <></>}
  </>);