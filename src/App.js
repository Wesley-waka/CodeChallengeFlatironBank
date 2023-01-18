// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";
import Form from "./Component/Form";
import { useEffect, useState } from "react";
import Search from "./Component/Search";

//OUR MAIN COMPONENT FOR RENDERING
function App() {
  const [formData, setFormData] = useState([])
  const [search, setSearch] = useState("")

  //use effect for my form render
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);

      });
  }, []);


  function setSearchString(str) {
    setSearch(str);
  }
  //components are rendered here
  return (
    <div className="container">
      <Navbar />
      <br />
      <Search search={search} setSearchString={setSearchString} />
      <br />
      <Form formData={formData} setFormData={setFormData} />
      <br />
      <Table formData={formData} />
    </div>
  );
}

export default App;
