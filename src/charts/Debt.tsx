import accounts from "../DB/accounts";
import "./charts.css";

function Debt() {
  var debt = accounts.reduce((a, b) => {
    return a + b.getBalance();
  }, 0);

  var balances = accounts
    .map((account) => {
      return { account: account.name, balance: account.getBalance() };
    })
    .sort((a, b) => {
      return b.balance - a.balance;
    });

  return (
    <>
      <div className="debt-container">
        <div className="debt-header">
          <div className="debt-title">Total Debt:</div>
          <div className="debt-number">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(debt)}
          </div>
        </div>
        <div className="debt-details">
          <div className="balances-heading">Account Balances</div>
          <div className="balance-records">
            {balances.map((balance) => {
              return (
                <div
                  className="balance-record-container"
                  key={balance.account.replace(" ", "-")}
                >
                  <div className="account-name">{balance.account}:</div>
                  <div className="balance-record">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(balance.balance)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Debt;
