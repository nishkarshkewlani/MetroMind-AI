import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import MapComponent from "./MapComponent";

function App() {

  const [data, setData] = useState({
    traffic: "Loading...",
    weather: "Loading...",
    crowd: "Loading..."
  });

  useEffect(() => {

    const fetchData = () => {

      axios
        .get("http://127.0.0.1:5000/api/live")
        .then((res) => {

          setData(res.data);

        });

    };

    fetchData();

    setInterval(fetchData, 5000);

  }, []);

  return (

    <div>

      <Navbar />

      <div style={{
        padding: "20px"
      }}>

        <Dashboard data={data} />

        <MapComponent />

      </div>

    </div>

  );
}

export default App;
