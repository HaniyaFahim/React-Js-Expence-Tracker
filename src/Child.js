import React,{useContext ,useState} from "react";
import "./App.css";
import {TransactionContext} from './TransContext'


function Child() {

  let {transactions, addTransaction}= useContext(TransactionContext);
  let [newDesc, setDesc] = useState('');
  let [newAmount, setAmount] = useState(0);
  const handleActions = (event)=>{
    event.preventDefault();
    if(
      Number(newAmount) === 0
      ){
      alert('Please Enter Correct Value');
      return false;}
      addTransaction({
        amount:Number(newAmount),
        desc:newDesc
      });
      localStorage.setDesc('');
      localStorage.setAmount(0);
  }

  const getIncome = ()=>{
    let income = 0;
for(var i =0;i < transactions.length;i++){
  if(
    transactions[i].amount > 0
    )
    income = income + transactions[i].amount
}
return income;
  };
  const getExpence = ()=>{
    let expence = 0;
for(var i =0;i < transactions.length;i++){
  if(
    transactions[i].amount < 0
    )
    expence += transactions[i].amount
}
return expence;
  };

  return (
    <div className="container">
      <h1 className="text-center">Expence Tracker</h1>
      <h3>
        Balance <br /> 
        ${getIncome() + getExpence()}
      </h3>
      <div className="expence-container">
        <h3>
          Income <br /> $ {getIncome()}
        </h3>
        <h3>
          Expence <br /> $ {getExpence()}
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transObj, index) => {
          return (
            <>
              <li key={index}>
                <span>{transObj.desc}</span>
                <br />
                <span>{transObj.amount}</span>
              </li>
              
            </>
          );
        })}
      </ul>
      <h3>Add New Transaction</h3>
      <hr />
      <form onSubmit={handleActions} className="transaction-form">
        <label>Enter Descrption</label>
        <br />


        <input
        value={newDesc}
        onChange={(ev)=>setDesc(ev.target.value)}
        className="input" type="text" required />
        <br />
        <br />
        <label>Enter Amount</label>
        <br />
        <input
         value={newAmount}
         onChange={(ev)=>setAmount(ev.target.value)}
        className="input" required />
        <br />
        <br />
        <input type="submit" className="btn btn-hover" />
      </form>
    </div>
  );
}

export default Child;
