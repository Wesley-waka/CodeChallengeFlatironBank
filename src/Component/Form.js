import React from "react";
import { useState } from "react";

const Form = () => {
  //for local storage
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  })

  //to respond on user change
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        formData
      ),
    }).then((response) => response.json())
      .then((newPost) => {
        setFormData(newPost)
      });
  }


  return (
    <>

      <form className="row p-3" onSubmit={handleSubmit}>
        <div className="col-3">
          <input
            name="date"
            onChange={handleChange}
            value={formData.date}
            className="form-control"
            placeholder="MM/DD/YYY"
            type="date"
          />
        </div>
        <div className="col-3">
          <input
            name="description"
            onChange={handleChange}
            value={formData.description}
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="col-3">
          <input
            name="category"
            onChange={handleChange}
            value={formData.category}
            className="form-control"
            placeholder="Category"
          />
        </div>
        <div className="col-3">
          <input
            name="amount"
            onChange={handleChange}
            value={formData.amount}
            className="form-control"
            placeholder="Amount"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" >SUBMIT</button>
        </div>
      </form>



    </>
  );
};
// };

export default Form;
