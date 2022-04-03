import React from 'react';

const NavBar = ({accounts, setAccounts}) => {
  const isConnected = Boolean (accounts[0]);

  async function connectAccount(){
    if (window.ethereum){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return(
    <div>
      { /*social media icons on left*/}
      {/* <div> Facebook </div>
      <div> Twitter </div>
      <div> Email </div> */}

      {/*sctions and connect on right*/}
      {/* <div> About </div>
      <div> Mint </div>
      <div> Team </div> */}

      {/*connect button*/}
      {isConnected ?(
        <p> Connected </p>
      ) : (
        <button onClick={connectAccount}>Connect Wallet</button>
      )}

    </div>
  )
};

export default NavBar;
