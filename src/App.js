import "./App.css";
import axios from "axios";

// COMPONENTS
import Header from "./assets/components/Header";
import Restaurant from "./assets/components/Restaurant";
import Category from "./assets/components/Category";

// HOOK
import { useEffect, useState } from "react";

// FONT AWESOME ICONS
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

// PRINCIPAL
function App() {
  // STATES
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const BACK_URL = "http://localhost:4000/";
      try {
        const response = await axios.get(BACK_URL);
        // console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        alert("error with database");
      }
    };
    fetchData();
  }, []);

  // RETURN
  return isLoading ? (
    <h1 className="loading">Page is loading ...</h1>
  ) : (
    <div className="App">
      <Header />
      <main>
        <Restaurant data={data} />
        <div className="list">
          {data.categories.map((category, index) => {
            return <Category key={index} category={category} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
