import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import ApiData from "./components/APIData";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 2000); 
      })
      .catch(() => setLoading(false)); 
  }, []); 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="heading">Fetched Data ↯</h1>

      <button onClick={fetchData} className="button-92">
        Refresh ↻
      </button>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="tabscrl">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                {/* <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th> */}
              </tr>
            </thead>

            <tbody>
              <ApiData data={data} />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}



export default App;

