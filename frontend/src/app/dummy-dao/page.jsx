"use client"

import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Mint from "./components/Mint";
// import History from "./components/History";
import { NetworkSwitcher } from "./components/NetworkSwitcher";
import { ethers } from "ethers";
import ConnectButton from "./components/ConnectButton";
import ErrorPopup from "./components/ErrorPopup";
import { Fade } from '@mui/material';
import dynamic from 'next/dynamic';

const Component = dynamic(() => import('../../components/vm-component'), { ssr: false });


const HomePage = () => {
  const windowOverride = typeof window !== 'undefined' ? window : null;
  const [connected, setConnected] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [newMintTx, setNewMintTx] = useState({});
  const classes = useStyles({ connected });



  useEffect(() => {
    // Initialize the injected provider event listeners to execute behaviors if account/chain/unlock changes in Metamask 
    windowOverride?.ethereum?.on("chainChanged", () => {
      if (typeof window !== 'undefined') {
        return window.location.reload();
      }
    });
    windowOverride?.ethereum?.on("accountsChanged", () => {
      if (ethers.isAddress(windowOverride?.ethereum?.selectedAddress)) {
        setConnected(true);
      }
    });
    checkUnlock();
  }, [])

  const checkUnlock = async () => {
    const isUnlocked = await windowOverride?.ethereum?._metamask?.isUnlocked();
    setConnected(isUnlocked);
  }

  const readCampaignComponentSrc = "manztech.testnet/widget/readCampaign";

  return (
    <Fade in appear timeout={1500}>
      <div className={classes.root}>
        <NetworkSwitcher />
        <ErrorPopup errorMessage={errorMessage} errorMessageCallback={() => setErrorMessage("")} />
        <div className={classes.buttonDiv}>
          <ConnectButton connected={connected} setErrorMessage={(msg) => setErrorMessage(msg)} />
        </div>
        <Container maxWidth="lg" className={classes.contentContainer}>
          <Typography className={classes.pinkLotusHeader}>
            Welcome to the Pink Lotus DAO
          </Typography>

          <div className={classes.childContainer}>
            <Mint setErrorMessage={(msg) => setErrorMessage(msg)} setNewMintTx={(x) => setNewMintTx(x)} />
            <Component src={readCampaignComponentSrc} props={{ managerAddress: "0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7" }} />
          </div>
        </Container>
      </div>
    </Fade>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(/bg.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  buttonDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "16px"
  },
  contentContainer: {
    marginLeft: "84px",
    width: "100%",
    marginTop: "32px"
  },
  pinkLotusHeader: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "42px",
  },
  childContainer: {
    display: "flex",
    width: "100%",
    marginTop: "120px",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
}));

export default HomePage;
