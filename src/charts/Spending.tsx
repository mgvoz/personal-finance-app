import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import months from "../DB/months";
import transactions from "../DB/transactions";
import { Month, Transaction } from "../models/models";
import "./charts.css";

function Spending(props: any) {
  console.log(props);

  var initialValue: { name: string; data: number[] }[] = [];

  var [chartMonths, setChartMonths] = useState(months);
  var [chartData, setChartData] = useState(initialValue);

  const [chartState, setChartState] = useState({
    series: chartData,
    options: {
      chart: {
        height: 250,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.5,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454", "#228787"],
      dataLabels: {
        enabled: true,
        formatter: function (value: number) {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(value);
        },
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Spending Trends by Month",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: chartMonths.map((month: { name: any }) => {
          return month.name;
        }),
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Amount",
        },
        min: 0,
        max: 3000,
        formatter: function (value: number) {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(value);
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  });

  useEffect(() => {
    setChartMonths(prepareXAxisData);
  }, [props]);

  useEffect(() => {
    setChartData(prepareChartData);
  }, [chartMonths]);

  useEffect(() => {
    setChartState({
      ...chartState,
      series: chartData,
      options: {
        ...chartState.options,
        xaxis: {
          ...chartState.options.xaxis,
          categories: chartMonths.map((month: { name: any }) => {
            return month.name;
          }),
        },
      },
    });
  }, [chartData]);

  var prepareXAxisData = () => {
    var filteredMonths: Month[] = months;
    if (props.monthId != 0) {
      filteredMonths = months.filter((month) => {
        return month.id == parseInt(props.monthId);
      });
    }

    return filteredMonths;
  };

  var prepareChartData = () => {
    var data: { name: string; data: number[] }[] = [];

    var filterTransactionsByType: Transaction[] = transactions;
    if (props.transactionTypeId == 0) {
      filterTransactionsByType = filterTransactionsByType.filter(
        (transaction) => {
          return transaction.type.id == 1 || transaction.type.id == 3;
        }
      );
    } else if (props.transactionTypeId == 2) {
      filterTransactionsByType = [];
    } else {
      filterTransactionsByType = filterTransactionsByType.filter(
        (transaction) => {
          return transaction.type.id == props.transactionTypeId;
        }
      );
    }

    //console.log("by trans type:", filterTransactionsByType);

    var filterTransactionsByMonth: Transaction[] = filterTransactionsByType;
    if (props.monthId != 0) {
      filterTransactionsByMonth = filterTransactionsByMonth.filter(
        (transaction) => {
          return transaction.month.id == props.monthId;
        }
      );
    }

    //console.log("by month:", filterTransactionsByMonth);

    var filterTransactionsByAccountType: Transaction[] =
      filterTransactionsByMonth;
    if (props.accountTypeId == 0) {
      filterTransactionsByAccountType = filterTransactionsByAccountType.filter(
        (transaction) => {
          return (
            transaction.account.type.id == 2 ||
            transaction.account.type.id == 3 ||
            transaction.account.type.id == 4
          );
        }
      );
    } else if (props.accountTypeId == 1) {
      filterTransactionsByAccountType = [];
    } else {
      filterTransactionsByAccountType = filterTransactionsByAccountType.filter(
        (transaction) => {
          return transaction.account.type.id == props.accountTypeId;
        }
      );
    }

    //console.log("by acct type:", filterTransactionsByAccountType);

    if (filterTransactionsByAccountType.length > 0) {
      var uniqueAccountTypes = [
        ...new Set(
          filterTransactionsByAccountType.map(
            (transaction) => transaction.account.type.name
          )
        ),
      ];

      uniqueAccountTypes.forEach((accountType) => {
        //console.log(accountType);
        var amountArray: number[] = [];

        chartMonths.forEach((month: { id: number }) => {
          //console.log(month);
          var findValues = filterTransactionsByAccountType.filter(
            (transaction) => {
              return (
                transaction.account.type.name == accountType &&
                transaction.month.id == month.id
              );
            }
          );
          //console.log(findValues);
          if (findValues.length > 0) {
            amountArray.push(
              findValues.reduce((a, b) => {
                return a + b.amount;
              }, 0)
            );
          } else {
            amountArray.push(0.0);
          }
        });

        data.push({ name: accountType, data: amountArray });
      });
      //console.log(data);
      {
        /*var accumulator = (array: Transaction[]) => {
        var flattenArray = array.flatMap((f) => {
          return { name: f.account.type.name, amount: f.amount };
        });
        return flattenArray.reduce((acc: any, item) => {
          const itemIndex = acc.findIndex((i: any) => i.type === item.type);
          if (itemIndex !== -1) {
            acc[itemIndex].amount += item.amount;
          } else {
            acc.push(item);
          }
          return acc;
        }, []);
      };

      chartMonths.forEach((month) => {
        //console.log("month: ", month);

        var tempData = filterTransactionsByAccountType.filter((transaction) => {
          return transaction.month.id == month.id;
        });
        //console.log(tempData);
        data.push(accumulator(tempData));
      });*/
      }
    }
    return data;
  };

  return (
    <>
      <Chart
        options:any={chartState.options}
        series={chartState.series}
        type="line"
        width="300"
      />
    </>
  );
}

export default Spending;
