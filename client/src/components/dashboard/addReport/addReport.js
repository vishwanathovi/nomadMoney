import React, { Component } from "react";

export default class home extends Component {
  render() {
    return (
      <div className="addReport">
        <h2>Add Report</h2>
        <form>
          <label>Month & Year</label>
          <input type="month" name="month" />
          <label>Description</label>
          <input type="text" name="description" placeholder="description" />
          <br />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}
