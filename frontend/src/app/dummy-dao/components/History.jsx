import React, { useState, useEffect } from 'react';
import PurchaseObject from './PurchaseObject';
import { formatEther } from 'ethers';
import { makeStyles } from '@mui/styles';
import { CircularProgress } from '@mui/material';
import { Interface } from 'ethers';
import abi from '../pink-lotus-dao.abi.json'
import BigNumber from 'bignumber.js';
import ChartComponent from './Chart';
import FlipMove from 'react-flip-move';


const History = ({ setErrorMessage, newMintTx, clearNewMintTx }) => {
    const lotusDaoAddress = process.env.NEXT_PUBLIC_LOTUS_ADDRESS || "";
    const etherscanURI = "https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=" + lotusDaoAddress + "&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=" + process.env.NEXT_PUBLIC_ETHERSCAN_API;

    const [historyObjects, setHistoryObjects] = useState([]);
    const [historyType, setHistoryType] = useState('Purchase');
    const [loadContent, setLoadContent] = useState(false);
    const [showCount, setShowCount] = useState(5);

    const classes = useStyles();


    useEffect(() => {
        // Rather than calling getTxHistory() upon mount, set the loadContent state to true to display certain components while waiting for response from etherscan
        setLoadContent(true);
    }, [])

    useEffect(() => {
        getTxHistory();
    }, [loadContent])

    useEffect(() => {
        // Logic to execute if a new successful Mint transaction was made from the <Mint /> component
        if (Object.keys(newMintTx)?.length > 0) {
            setHistoryObjects(prevState => [newMintTx, ...prevState]);
            clearNewMintTx();
        }
    }, [newMintTx])

    const getTxHistory = async () => {
        try {
            const res = await fetch(etherscanURI);
            const resultTransactions = (await res.json()).result;
            // Filter the transactions on the Lotus Contract for 'buy()' method and successfully mined
            const transactions = resultTransactions.filter((x) => x.functionName.includes('buy(') && x.isError === "0");
            const transactionsToRender = transactions.map((x) => {
                const contractInterface = new Interface(abi);
                const decoded = contractInterface.decodeFunctionData('buy', x.input);
                const price = new BigNumber(x.value).dividedBy(new BigNumber(decoded.toString()));
                const date = new Date(parseInt(x.timeStamp) * 1000);
                const lotusAmount = formatEther(decoded.toString());
                // Construct the object that will be set in state
                return { block: x.blockNumber, txHash: x.hash, priceInEth: price.toString(), lotusAmount, date };
            })
            setHistoryObjects(transactionsToRender);
        } catch (err) {
            setErrorMessage("Error Fetching Transaction History: " + err?.info?.error?.message ?? err?.message);
        }
        setLoadContent(false);
    }

    const handleLoadMorePurchases = () => {
        setShowCount(prevCount => prevCount + 5);
    }

    const handleToggle = () => {
        // Handle switching between price history and purchase history views 
        const typeToChange = historyType === 'Purchase' ? 'Price' : 'Purchase';
        setHistoryType(typeToChange);
    }

    let render = null;
    if (loadContent) {
        // If the etherscan request is still loading, display a loading spinner
        render = (
            <div className={classes.centeredContainer}>
                <CircularProgress className={classes.spinner} />
            </div>
        );
    } else if (historyType === "Purchase") {
        // Display a list of buy transaction history on the contract 
        const purchaseObjects = historyObjects.slice(0, showCount).map((obj) => (
            <div key={obj.txHash}>
                <PurchaseObject date={obj.date} amount={obj.lotusAmount} txHash={obj.txHash} />
            </div>
        ));

        render = (
            <div className="fullWidth">
                <FlipMove
                    typeName={null}
                    enterAnimation="fade"
                    leaveAnimation="fade"
                    duration={500}
                >
                    {purchaseObjects}
                </FlipMove>
                <button className={classes.loadMoreButton} onClick={handleLoadMorePurchases}>
                    Load More
                </button>
            </div>
        );
    } else if (historyType === "Price") {
        // Display the price history chart
        render = <ChartComponent data={historyObjects.map(x => ({ price: parseFloat(x.priceInEth), date: x.date }))} />;
    }

    return (
        <div className={classes.history}>
            <div className={classes.headerContainer}>
                <span className="sectionHeader">{historyType} History</span>
                <button className={classes.switchButton} onClick={handleToggle}>
                    {(historyType === 'Purchase' ? 'Price' : 'Purchase').toUpperCase()}
                </button>
            </div>
            {render}
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    centeredContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px' // This ensures vertical centering by occupying the full viewport height.
    },
    spinner: {
        color: 'black',
    },
    history: {
        width: "100%",
        padding: "0px 100px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    loadMoreButton: {
        width: '100%',
        textAlign: 'right',
        background: 'white',
        color: 'blue',
        border: 'none',
        cursor: 'pointer',
        marginBottom: "50px"
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    switchButton: {
        padding: "8px 20px",
        fontSize: "16px",
        marginBottom: "10px",
        borderRadius: "4px",
        color: 'black',
        background: '#FFC1CC',
        border: '#FF69B4 solid 2px',
        cursor: 'pointer',
        '&:hover': {
            background: 'white'
        }
    },
}))

export default History;