import React from "react";

const Table = ({ formData }) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8001/transactions/${formData.id}`, {
      method: 'DELETE'

    }).then((r) => r.json())
      .then(() => console.log("deleted!"));
  }
  // console.log(formData.id);
  //fetching data from server

  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* sorting and loooping through my data */}
          {formData.sort((a, b) => a.index > b.index ? 1 : -1)
            .map((bank, index) => {
              return (
                <tr key={index}>
                  <td>{bank.date}</td>
                  <td>{bank.description}</td>
                  <td>{bank.category}</td>
                  <td>{bank.amount}</td>
                  <td><button className="btn btn-primary" onClick={handleSubmit}>DELETE</button></td>
                </tr>

              );
            })}
        </tbody>
      </table>
    </>
  );
};


export default Table;
