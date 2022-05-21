import React from "react";

function Savings (){

const tierOne = () => {
  console.log("10,00 Naira")
  console.log("20,000 Naira")
  console.log("30,000 Naira")
}

  return(
<div>
  <h1>Group Savings Web Application</h1>

<h3>Tier 1</h3>
<h3>Tier 2</h3>
<h3>Tier 3</h3>
  <button onClick>7% Intrest per week</button>
  <button onClick>12% Intrest per week</button>
  <button onClick>25% Intrest per week</button> <br />
<button>TOTAL MONEY SAVED</button>
</div>

  );
}

export default Savings;
