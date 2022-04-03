// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//address recepient =  0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;  // fixed for now

contract POSP is ERC1155, Ownable {
        bool public isPublicMintEnabled;
        constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmXMvBcCmcWf9ATm6nL23gKKLpLtB128GzT7QCxM3HuoP8/{id}.json"){
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner{
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint( uint256 id, uint256 amount)//bytes memory data is removed and directly called below
        public
    {
        _mint(msg.sender, id, amount, "");
    }

    function sendtoReciepient(address recepient, uint256 id)// We probably don't need this; can directly call safe transferfrom
        public
    {
    safeTransferFrom (msg.sender, recepient, id, 1, "");
    }

    // create a tokenid counter, increase tokenid after every mint.
}

