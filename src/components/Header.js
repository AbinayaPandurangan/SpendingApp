import React from "react";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Header(props) {
  const budgetInputRef = useRef(null);
  const [budgetInputState, setBudgetInputState] = useState(0);

  function setBudgetHandler(e) {
    e.preventDefault();
    setBudgetInputState((input) => Number(budgetInputRef.current.value));
    props.setBudget(budgetInputRef.current.value);
  }
  function resetHandler(e) {
    // e.preventDefault();
    // budgetInputRef.current.value = "";
    // setBudgetInputState(0);
    // props.setBudget(budgetInputRef.current.value);
    // props.clearCart(budgetInputState);
    refreshPage();
  }
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className={"header fixed-top"}>
      <div className="container ">
        <div className="headerwidth">
          <h2 className="headerelements">Budget = ${budgetInputState}</h2>

          <input
            className="form-inline headerelements"
            pattern="[0-9]"
            ref={budgetInputRef}
            type="number"
            placeholder="Input Money to spend"
          />
          <button
            className="setamtbutton"
            title={budgetInputState ? "Budget Already set" : ""}
            disabled={budgetInputState}
            onClick={setBudgetHandler}
          >
            Set Budget
          </button>
          <button className="clearbutton" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
