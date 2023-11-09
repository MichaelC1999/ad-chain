import React, { useMemo } from 'react';
import { ethers } from 'ethers';
import { Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';


const ConnectButton = ({ connected, setErrorMessage }) => {
    const classes = useStyles({ connected });
    const windowOverride = typeof window !== 'undefined' ? window : null;

    // Instantiate the provider, if the window object remains the same no need to recalculate
    // const provider = useMemo(() => {
    //     return new ethers.BrowserProvider(windowOverride?.ethereum);
    // }, [windowOverride]);

    const connect = async () => {
        // if (!connected) {
        //     // If the user is not signed into metamask, execute this logic
        //     try {
        //         await provider.send("eth_requestAccounts", []);
        //         await provider.getSigner();
        //     } catch (err) {
        //         setErrorMessage("Connection Error: " + err?.info?.error?.message ?? err?.message);
        //     }
        // }
    }

    return (
        null
    );
};

const useStyles = makeStyles(theme => ({
    connectButton: {
        margin: "10px",
        padding: "4px 20px",
        fontSize: "16px",
        borderColor: '#FF69B4',
        borderWidth: '2px',
        borderRadius: '4px',
        backgroundColor: props => (props.connected ? '#FF69B4' : '#FFC1CC'),
        color: props => (props.connected ? 'white' : 'black'),
        "&:hover": {
            margin: "10px",
            padding: "4px 20px",
            fontSize: "16px",
            borderColor: '#FF69B4',
            borderWidth: '2px',
            borderRadius: '4px',
            color: 'black'
        }
    },
}));

export default ConnectButton;
