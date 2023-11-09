// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CampaignNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    constructor(
        address initialOwner
    ) ERC721("AdChainCampaign", "ADC") Ownable(initialOwner) {}

    uint public tokenCount = 0;

    function safeMint(address to, string memory uri) public {
        _safeMint(to, tokenCount);
        _setTokenURI(tokenCount, uri);

        tokenCount += 1;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
