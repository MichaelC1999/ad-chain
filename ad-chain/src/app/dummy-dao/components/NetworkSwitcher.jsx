import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export function NetworkSwitcher() {
    const windowOverride = typeof window !== 'undefined' ? window : null;
    const [errorMessage, setErrorMessage] = useState("");
    const [isEthereumAvailable, setIsEthereumAvailable] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'ethereum' in window) {
            setIsEthereumAvailable(true);
        }
    }, [])

    const switchNetwork = async () => {
        try {
            // Prompt user to switch to Sepolia
            await windowOverride?.ethereum?.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x4e454153' }],
            });
        } catch (switchError) {
            setErrorMessage(switchError.message);
        }
    }

    if (isEthereumAvailable) {
        if (windowOverride?.ethereum?.networkVersion == "1313161555") {
            // This component renders on all pages. If the network is Sepolia, render nothing
            return null;
        }
    } else {
        // If injected provider is not in use, do not render this modal by default
        return null;
    }

    return (
        <div>
            <Dialog open={true} aria-labelledby="network-switcher-title">
                <DialogTitle className="center" id="network-switcher-title">
                    Network Switcher
                </DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" alignItems="center" >
                        <Typography variant="body1">
                            This dApp is deployed on Aurora Testnet (Chain ID 1313161555)
                        </Typography>
                        <Typography variant="body1">
                            You are currently connected to Chain ID {windowOverride?.ethereum?.networkVersion || "N/A"}
                        </Typography>

                        {switchNetwork && (
                            <Box mt={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => switchNetwork()}
                                >
                                    Switch to Aurora Testnet
                                </Button>
                            </Box>
                        )}
                        <Box mt={2}>
                            <Typography variant="body2" color="error">
                                {errorMessage}
                            </Typography>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
