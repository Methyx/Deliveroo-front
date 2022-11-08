import "./App.css";
import axios from "axios";

// COMPONENTS
import Header from "./assets/components/Header";
import Restaurant from "./assets/components/Restaurant";
import Category from "./assets/components/Category";
import Panier from "./assets/components/Panier";

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
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const BACK_URL = "http://localhost:4000/";
      const BACK_URL = "https://site--back-deliveroo--gw6mlgwnmzwz.code.run/";
      // console.log(process.env.REACT_APP_BACK_URL);
      try {
        const response = await axios.get(BACK_URL);
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
        <div className="background-gray">
          <div className="content container">
            <div className="list container">
              {data.categories.map((category, index) => {
                return (
                  <Category
                    key={index}
                    category={category}
                    basket={basket}
                    setBasket={setBasket}
                  />
                );
              })}
            </div>
            <div className="panier">
              <Panier basket={basket} setBasket={setBasket} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
