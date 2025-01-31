import "./Loading.css";
import { useNavigate } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import transactions from "../../DB/transactions";
import accounts from "../../DB/accounts";
import { motion } from "framer-motion";

function Loading() {
  let navigate = useNavigate();
  const [showAccounts, setShowAccounts] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);

  var loadingRedirectFunc = () => {
    navigate("/home");
  };

  var showAccountsFunc = () => {
    setShowAccounts(true);
  };

  var showTransactionsFunc = () => {
    setShowTransactions(true);
  };

  setTimeout(showAccountsFunc, 4000);
  setTimeout(showTransactionsFunc, 6000);
  setTimeout(loadingRedirectFunc, 8000);

  var statuses: string[] = ["Scanning...", "Compiling...", "Loading..."];

  let statusMap = statuses.map((status, index) => {
    return (
      <div
        className={
          "tagline fs-4 carousel-item status" + (index == 0 ? " active" : "")
        }
        data-bs-interval="2000"
        key={status + "_" + index.toString()}
      >
        <span className="d-block w-100 heading">{status}</span>
      </div>
    );
  });

  var name = localStorage.getItem("personal-finance-app-user-name");

  return (
    <>
      <motion.div
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
        transition={{ delay: 0, duration: 0.5 }}
        className="loading-container"
      >
        <div className="greeting">Welcome {name}!</div>
        <div className="loading">
          <div className="spinner">
            <Spinner animation="border" variant="success" />
          </div>
          <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner status">{statusMap}</div>
          </div>
        </div>
        <div className="findings">
          <div className={"accounts" + (showAccounts ? " show" : " noshow")}>
            <span className="green">{accounts.length}</span> accounts found!
          </div>
          <div
            className={
              "transactions" + (showTransactions ? " show" : " noshow")
            }
          >
            <span className="green">{transactions.length}</span> transactions
            found!
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Loading;
