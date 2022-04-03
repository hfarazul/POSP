import {useState} from 'react';
//import { ethers } from "ethers";
import POSP from './POSP.json';
import { create } from 'ipfs-http-client';
const { ethers } = require("ethers");
const POSPAddress = '0x176d3abcb6c27802AacCA2B29102081ea3767125';

async function usehandleMint(){
  console.log("handlemint called")
  if (window.ethereum){
    console.log("etherium detected")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      POSPAddress,
      POSP.abi,
      signer
    );
    console.log("contract = ", contract)
    try {
      const response = await contract.mint(1,2);
      //       const response = await contract.mint(BigNumber.from(mintAmount), {
//          value: ethers.utils.parseEther((0.0001*mintAmount).toString())
//        });
      console.log('response: ', response);
    }catch(err){
      console.log("error: ", err)
    }
  }
  else {
    console.log("etherium not detected")
  }
}

// const MainMint = ({ accounts, setAccounts})=> {
//   console.log("called main mint")
//   // const [mintAmount, setMintAmount] = useState(1);
//   const isConnected = Boolean(accounts[0]);

//   async function handleMint(){
//     console.log("handlemint called")
//     if (window.ethereum){
//       console.log("etherium detected")
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       const signer = provider.getSigner();
//       const contract = new ethers.contract(
//         POSPAddress,
//         POSP.abi,
//         signer
//       );
//       console.log("contract = ", contract)
//       try {
//         const response = await contract.mint(1,2);
//         //       const response = await contract.mint(BigNumber.from(mintAmount), {
// //          value: ethers.utils.parseEther((0.0001*mintAmount).toString())
// //        });
//         console.log('response: ', response);
//       }catch(err){
//         console.log("error: ", err)
//       }
//     }
//     else {
//       console.log("etherium not detected")
//     }
//   }

//   const handleDecrement = () =>{
//     if(mintAmount<=1) return;
//     setMintAmount (mintAmount -1);
//   };

//   const handleIncrement = () =>{
// //   if(mintAmount >= 3) return;
//     setMintAmount(mintAmount + 1)
//   };

//   return(
//     <div>
//        <p>Welcome to the future where your resume is a collection of NFTs</p>
//        {isConnected?(
//          <div>
//            {/* <div>
//              <button onClick={handleDecrement}>-</button>
//              <input type="number" value = {mintAmount}/>
//              <button onClick={handleIncrement}>-</button>
//            </div> */}
//            {/* <button onClick = {handleMint}>Mint Now</button> */}
//           </div>
//        ):(
//          <p>You are not connected to Mint. </p>
//        )}
//     </div>
//   );
// };

// export default MainMint;

export default usehandleMint;
