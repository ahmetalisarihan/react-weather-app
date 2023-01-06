import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';

function App() {
  const key = "cf7dfd15daec9b1e2e5ed44bafa9bbbf"
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(()=> {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
          );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search]);
  return (
    <div className="App">
      <div className="mb-3 pt-0">
        <input onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Placeholder" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"/>
      </div>
        {city && <City city={city}/>}

    </div>
  );
}

export default App;
