import React, { useState, useEffect } from "react";
import logo from "./download.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./services/data";
const App = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [rows, setRows] = useState([]);
  const itemPerPages = 5; // so phan tu 1 trang
  const pageOfTable = Math.ceil(data.length / itemPerPages);

  useEffect(() => {
    setRows(calcRows());
  }, [pageIndex]);

  const handleNext = () => {
    if (pageIndex < pageOfTable) {
      setPageIndex(pageIndex + 1);
    }
    return;
  };

  const handlePre = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
    return;
  };

  const calcRows = () => {
    const start = (pageIndex - 1) * itemPerPages;
    const end = itemPerPages * pageIndex; //
    const newArray = data.slice(start, end);
    return newArray;
  };
  const renderTable = () => {
    return (
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr>
                <th scope="row">
                  {(pageIndex - 1) * itemPerPages + index + 1}
                </th>
                <td>{row.n}</td>
                <td>{row.l}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const renderPagi = () => {
    let result = [];
    for (let i = 0; i < pageOfTable; i++) {
      result.push(
        <li class={`pageNumber ${i + 1 === pageIndex ? "active" : ""}`}>
          <a href="#">{i + 1}</a>
        </li>
      );
    }
    return result;
  };
  return (
    <>
      {renderTable()}
      <ul class="pagination">
        <li>
          <div onClick={handlePre} class="prev">
            Pre
          </div>
        </li>
        {renderPagi().map((item) => {
          return item;
        })}
        <li>
          <div onClick={handleNext} class="next">
            Next{" "}
          </div>
        </li>
      </ul>
    </>
  );
};
export default App;
