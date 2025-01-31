import { Dropdown } from "react-bootstrap";
import "./Home.css";
import accountTypes from "../../DB/account-types";
import months from "../../DB/months";
import transactionTypes from "../../DB/transaction-types";
import { motion } from "framer-motion";
import Spending from "../../charts/Spending";
import { FilterState } from "../../models/models";
import { useEffect, useState } from "react";
import Debt from "../../charts/Debt";
import PlaceholderChart from "../../charts/PlaceholderChart";

function Home() {
  var [accountTypeState, setAccountTypeState] = useState(0);
  var [transactionTypeState, setTransactionTypeState] = useState(0);
  var [monthState, setMonthState] = useState(0);
  var [filterState, setFilterState] = useState(
    new FilterState(accountTypeState, transactionTypeState, monthState)
  );

  var onSelectAccountType = (eventKey: any) => {
    setAccountTypeState(eventKey);
  };
  var onSelectTransactionType = (eventKey: any) => {
    setTransactionTypeState(eventKey);
  };
  var onSelectMonth = (eventKey: any) => {
    setMonthState(eventKey);
  };

  useEffect(() => {
    setFilterState(
      new FilterState(accountTypeState, transactionTypeState, monthState)
    );
  }, [accountTypeState, transactionTypeState, monthState]);

  return (
    <>
      <motion.div
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
        transition={{ delay: 0, duration: 0.5 }}
        className="home"
      >
        <div className="dashboard-header">
          <div className="dashboard-header-text">
            <h1>Dashboard</h1>
          </div>
          <div className="filters">
            <div className="filter-text">Filters:</div>
            <Dropdown onSelect={onSelectAccountType}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Account Type
                {accountTypeState == 0
                  ? ""
                  : ": " +
                    accountTypes.find((f) => f.id == accountTypeState)?.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item key={0} eventKey={0}>
                  All
                </Dropdown.Item>
                {accountTypes.map((type) => {
                  return (
                    <Dropdown.Item key={type.id} eventKey={type.id}>
                      {type.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={onSelectTransactionType}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Transaction Type
                {transactionTypeState == 0
                  ? ""
                  : ": " +
                    transactionTypes.find((f) => f.id == transactionTypeState)
                      ?.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item key={0} eventKey={0}>
                  All
                </Dropdown.Item>
                {transactionTypes.map((type) => {
                  return (
                    <Dropdown.Item key={type.id} eventKey={type.id}>
                      {type.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={onSelectMonth}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Month
                {monthState == 0
                  ? ""
                  : ": " + months.find((f) => f.id == monthState)?.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item key={0} eventKey={0}>
                  All
                </Dropdown.Item>
                {months.map((month) => {
                  return (
                    <Dropdown.Item key={month.id} eventKey={month.id}>
                      {month.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="dashboard">
          <div className="col-one">
            <div className="chart chart-left-1">
              <Spending {...filterState} />
            </div>
            <div className="chart chart-left-2">
              <Debt></Debt>
            </div>
          </div>
          <div className="col-two">
            <div className="chart chart-right-1">
              <PlaceholderChart></PlaceholderChart>
            </div>
            <div className="chart chart-right-2">
              <PlaceholderChart></PlaceholderChart>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
