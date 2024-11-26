import React, { useState } from "react";
import { Account } from "../utils/wallet";

export const WalletModal = ({ isopen, onclose }) => {
  const [Amount, setAmount] = useState(undefined);
  const handlechange = (e) => {
    setAmount(+e.target.value || 0);
    console.log(e.target.value);
  };
  const manageWallet = (e) => {
    if (e.target.textContent.trim() === "Add") {
      console.log(Amount);
      Account.Addmoney(Amount);
      onclose();
      console.log(Account.checkBalance());
    } else if (e.target.textContent.trim() === "Withdraw") {
      Account.SubMoney(Amount);
      onclose();
    }
  };
  return (
    <div className="wallet-con">
      <button onClick={() => onclose()}>close</button>
      <form className="modal-form">
        <h2>Manage your Wallet</h2>
        <input type="number" value={Amount} onChange={handlechange} />
        <div className="btn-grp" onClick={manageWallet}>
          <button type="button">Add</button>
          <button type="button">Withdraw</button>
        </div>
      </form>
    </div>
  );
};
