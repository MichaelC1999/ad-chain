// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./CampaignNFT.sol";

contract Manager {
    address public owner;
    address public campaignNFT;
    IERC20 public usdcToken;
    uint256 public nextCampaignId;
    uint256 public incrementingCounter;

    mapping(address => GatewayInfo) public gatewayInfo;

    mapping(uint => uint) public campaignViewCounter;

    struct GatewayInfo {
        string url;
        address protocolAddress;
        address payoutAddress;
    }

    constructor() {
        owner = msg.sender;
        // Deploy Campaign NFT contract
        campaignNFT = address(new CampaignNFT(address(this)));
        // usdcToken = IERC20(_usdcToken);
    }

    function mintCampaignNFT(
        uint256 usdcAmount,
        string memory metadataURI
    ) external {
        require(usdcAmount > 0, "USDC amount must be greater than 0");

        // usdcToken.transferFrom(msg.sender, address(this), usdcAmount);
        CampaignNFT(campaignNFT).safeMint(msg.sender, metadataURI);
        nextCampaignId++;
    }

    function setupGateway(
        string memory url,
        address protocolAddress,
        address payoutAddress
    ) external {
        require(msg.sender == owner, "Only the owner can set up the gateway.");
        gatewayInfo[protocolAddress] = GatewayInfo({
            url: url,
            protocolAddress: protocolAddress,
            payoutAddress: payoutAddress
        });
    }

    function getRandomCampaignNFT() external view returns (uint256, address) {
        CampaignNFT campaignContract = CampaignNFT(campaignNFT);
        uint tokenCount = campaignContract.tokenCount();
        uint256 randomSeed = uint256(
            keccak256(abi.encodePacked(msg.sender, incrementingCounter))
        ) % tokenCount;
        return (randomSeed, campaignNFT);
    }

    function executionMiddleware(
        address txTarget,
        uint256[] memory campaignsTokenIds,
        uint256[] memory campaignsViewedCounters,
        bytes memory signature,
        bytes memory functionData
    ) external returns (bytes memory) {
        // This is to be called in the middle of the external protocol function execution

        // Update campaign spend based on adViewData
        require(
            campaignsTokenIds.length == campaignsViewedCounters.length,
            "Input arrays must have the same length"
        );

        for (uint256 i = 0; i < campaignsTokenIds.length; i++) {
            uint256 campaignId = campaignsTokenIds[i];
            uint256 counter = campaignsViewedCounters[i];

            campaignViewCounter[campaignId] += counter;
        }

        incrementingCounter++;
        (bool success, bytes memory data) = txTarget.call(
            abi.encodePacked(functionData)
        );
        return data;
    }
}
