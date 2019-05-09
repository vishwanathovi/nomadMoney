import React, { Component } from "react";
import "./report.scss";

class reportHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalEarning: 0,
      totalExpense: 0
    };
  }

  componentDidMount() {
    let { report } = this.props;
    let totalEarning = 0,
      totalExpense = 0;

    totalEarning = report.earnings.reduce(
      (acc, earningObject) => acc + earningObject.earning,
      0
    );
    totalExpense = report.expenses.reduce(
      (acc, expenseObject) => acc + expenseObject.expense,
      0
    );

    this.setState({
      totalEarning,
      totalExpense
    });
  }

  render() {
    let { report } = this.props;
    let { totalEarning, totalExpense } = this.state;
    return (
      <div className="reportHome">
        <div className="reportOwnerMonth">
          <div className="reportOwner">{report.author.username}</div>
          <div className="reportMonth">{report.month}</div>
        </div>
        <div className="reportNumbers">
          <div className="reportTotalEarning">
            <div>Total Earning</div>
            <div> $ {totalEarning}</div>
          </div>
          <div className="reportTotalExpenses">
            <div>Total Expense</div>
            <div> $ {totalExpense}</div>
          </div>
          <div className="reportTotalNetEarning">
            <div>Total Net Earning</div>
            <div> $ {totalEarning - totalExpense}</div>
          </div>
        </div>
        <button>Add an earning</button>
        <button>Add a expense</button>
      </div>
    );
  }
}

export default reportHome;
