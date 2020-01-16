import React from "react";
import { Link } from "react-router-dom";

function PullingResult(props) {
  if (props.result != null) {
    return (
      <section id="pulling-result">
        <h2>Dataset</h2>
        <table className="table table-bordered ">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Number of Rows</th>
              <th>Format</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/">{props.result.name}</Link>
              </td>
              <td>{props.result.rows}</td>
              <td>{props.result.format}</td>
              <td>{props.result.size}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
  return <></>;
}

export default PullingResult;
