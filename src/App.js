import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {
  const key = "cf7dfd15daec9b1e2e5ed44bafa9bbbf"
  useEffect(()=> {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}&units=metric`
          );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[]);
  return (
    <div className="App">
      AAS
    </div>
  );
}

export default App;
