import React, { useEffect, useMemo, useState } from 'react';
import { Button, CircularProgress, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import dynamic from 'next/dynamic';
import { ethers, formatEther, formatUnits, parseEther, solidityPackedKeccak256 } from 'ethers';

const Component = dynamic(() => import('../../../components/vm-component'), { ssr: false });

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

const Mint = ({ setErrorMessage, setNewMintTx }) => {
    const transactionMiddlewareComponentSrc = "manztech.testnet/widget/transactionMiddleware"

    const windowOverride = typeof window !== 'undefined' ? window : null;
    const lotusDaoAddress = process.env.NEXT_PUBLIC_LOTUS_ADDRESS || "";

    const [currentCampaignId, setCurrentCampaign] = useState(0);
    const [lotusAmount, setLotusAmount] = useState('');
    const [buyInputError, setBuyInputError] = useState(false);
    const [buyInitialized, setBuyInitialized] = useState(false);
    // isEthereumAvailable helps prevent 'window' object errors while browser loads injected provider 
    const [isEthereumAvailable, setIsEthereumAvailable] = useState(false);
    const classes = useStyles();


    useEffect(() => {
        getCurrentCampaign();
        if (typeof window !== 'undefined' && 'ethereum' in window) {
            setIsEthereumAvailable(true);
        }
    }, [])

    useEffect(() => {
        // Buy flow starts with clearing input errors detected on last buy attempt
        if (buyInitialized) {
            handleBuy();
        }
        return () => clearTimeout(handleBuy);

    }, [buyInitialized])


    const price = 1;
    const provider = useMemo(() => {
        return new ethers.BrowserProvider(windowOverride?.ethereum);
    }, [windowOverride]);


    const readManager = new ethers.Contract("0xEE4b327474Fc66EeFeb0108Cb34EF77a335802d2", managerABI, provider);

    const getCurrentCampaign = async () => {
        try {
            if (windowOverride?.ethereum?.networkVersion !== "11155111") {
                return setCurrentCampaign(0);
            }
            const supply = await readManager.getRandomCampaignNFT();
            return setCurrentCampaign(supply);
        } catch (err) {
            return setErrorMessage(err?.info?.error?.message ?? err?.message);
        }
    }

    function computeLotusPrice(totalSupply) {
        // try {
        //     if (totalSupply === 0) {
        //         return "0";
        //     }
        //     // Construct the hash exactly how it would be in EVM
        //     const hash = solidityPackedKeccak256(['uint256'], [totalSupply]);
        //     const keccakNumerical = new BigNumber(formatUnits(hash, 'wei'));
        //     // Get the .1 ETH factor
        //     const etherFraction = new BigNumber('100000000000000000');
        //     const modulusResult = keccakNumerical.mod(etherFraction);
        //     const etherConvert = formatEther(BigInt(modulusResult));
        //     return etherConvert;
        // } catch (err) {
        //     setErrorMessage(err?.info?.error?.message ?? err?.message);
        //     return "0";
        // }
    }

    const getMsgValueInEth = (price, lotusAmount) => {
        // try {
        //     let msgValue = new BigNumber(price).multipliedBy(new BigNumber(lotusAmount)).toString();
        //     if (msgValue.split('.')[1]?.length > 18) {
        //         const int = msgValue.toString().split('.')[0];
        //         const dec = msgValue.toString().split('.')[1].slice(0, 18);
        //         msgValue = int + '.' + dec;
        //     }
        //     return msgValue;
        // } catch (err) {
        //     setErrorMessage(err?.info?.error?.message ?? err?.message);
        //     return "0.0";
        // }
    }

    const handleBuy = async () => {
        setTimeout(() => {
            setBuyInitialized(false);
        }, 12000);
        // The main Buy logic. Prepare the data to be passed in the buy() method and execute the call.
        // if (lotusAmount === "0" || !lotusAmount) {
        //     setBuyInputError(true);
        //     setBuyInitialized(false);
        //     return;
        // }
        // try {
        //     const msgValue = getMsgValueInEth(price, lotusAmount);
        //     const options: { [x]: bigint } = { value: parseEther(msgValue) };

        //     await provider.send("eth_requestAccounts", []);
        //     const signer = await provider.getSigner();
        //     const writePinkLotusContract = new ethers.Contract(lotusDaoAddress, abi, signer);
        //     if (!writePinkLotusContract) {
        //         throw new Error("Could not Instantiate Contract at address " + lotusDaoAddress);
        //     }
        //     const tx = await writePinkLotusContract.buy(parseEther(lotusAmount), options);
        //     const txReceipt = await tx.wait();
        //     // setNewMintTx passes this transaction to the history component to make a new entry in the transactions
        //     setNewMintTx({ txHash: txReceipt.hash, lotusAmount, date: new Date() });
        //     // Clear the amount state
        //     setLotusAmount('');
        // } catch (err) {
        //     setErrorMessage("Transaction Error: " + err?.info?.error?.message ?? err?.message);
        // }
        // setBuyInitialized(false);
    };

    let lotusInput = (
        <TextField
            variant="outlined"
            type="number"
            placeholder="0.0"
            className={classes.input}
            value={lotusAmount}
            onChange={(e) => {
                setBuyInputError(false)
                setLotusAmount(e.target.value)
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <img src="icon.png" width="56px" height="56px" />
                    </InputAdornment>
                ),
            }} />);

    if ((!lotusAmount || lotusAmount === "0") && buyInputError === true) {
        // Add the 'Invalid' tooltip message when user attempts an invalid amount to purchase 
        lotusInput = (
            <Tooltip
                title="Invalid Amount of LOTUS!"
                open={true}
                classes={{ tooltip: classes.customTooltip }}
                placement="top-end"
            >
                {lotusInput}
            </Tooltip>
        );
    }

    let button = <Button className={classes.buyButton} onClick={() => setBuyInitialized(true)}>Buy</Button>;
    if (buyInitialized) {
        button = (
            <Button className={classes.loadingButton} disabled>
                <CircularProgress size={24} className={classes.spinner} />
            </Button>
        );
    }

    let totalPurchaseInEth = null;
    if (lotusAmount) {
        totalPurchaseInEth = <div className={classes.purchaseContainer}>
            <span>Total Purchase</span>
            <span className={classes.valueInEth}>= {parseFloat(getMsgValueInEth(price, lotusAmount)).toFixed(5)} ETH</span>
        </div>;
    }

    if (!isEthereumAvailable) {
        return <></>;
    }

    const transactionComp = <Component src={transactionMiddlewareComponentSrc} props={{ currentCampaignId: currentCampaignId, managerAddress: "0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7", target: "0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7" }} />


    return (
        <div className={classes.mint}>
            <span className="sectionHeader">Amount of Lotus to Buy</span>
            {lotusInput}
            {button}
            <div className={classes.costSpan}>
                <span>Cost Per LOTUS ≈ 1 ETH</span>
            </div>
            {totalPurchaseInEth}
            {buyInitialized ? transactionComp : null}
        </div>
    );
};

const useStyles = makeStyles(() => ({
    mint: {
        width: "50%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    input: {
        borderRadius: '4px',
        marginBottom: '16px',
        width: '100%',
        '& .MuiOutlinedInput-adornment': {
            position: 'absolute',
            right: '0',
        },
    },
    buyButton: {
        border: '#FF69B4 2px solid',
        padding: "4px 20px",
        fontSize: "16px",
        borderRadius: '4px',
        backgroundColor: '#FFC1CC',
        color: 'black',
        marginBottom: '16px',
        alignSelf: 'stretch',
        "&:disabled": {
            cursor: "none"
        }
    },
    costSpan: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    infoIcon: {
        marginLeft: "8px",
        color: 'black',
    },
    customTooltip: {
        fontSize: "1.2rem",
        backgroundColor: "black",
        padding: "10px 15px",
    },
    loadingButton: {
        padding: "8px 20px",
        fontSize: "16px",
        borderRadius: '4px',
        backgroundColor: 'black',
        color: 'white',
        marginBottom: '16px',
        alignSelf: 'stretch',
        "&:disabled": {
            cursor: "not-allowed",
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        color: '#fff',
    },
    purchaseContainer: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: "bold"
    },
    valueInEth: {
        marginLeft: "10px"
    }
}));

export default Mint;