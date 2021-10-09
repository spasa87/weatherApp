import React from "react";
import "./App.css";
import SelectCity from "./components/Selector";
import WeatherList from "./components/WeatherLists";
import UseFetch from "./hooks/UseFetch";

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();
  const apiKey= process.env.REACT_APP_API_KEY;
  const url= process.env.REACT_APP_BASE_URL;
  
  const getContent= () => {
    if(error) return <h2>{error}</h2>
    if(!data && isLoading) return <h2>Loading...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <div className="App">
      <SelectCity onSearch={(city) => setUrl(`${url}/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}&units=metric`)}
      />

      {getContent()}
    </div>
  );
};

export default App;