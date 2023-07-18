import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Axios from 'axios';
function App() {
  const [details , setDetails] = useState({});

  const getDataFromServer = async () => {
    const {data} = await Axios.get('https://randomuser.me/api');
    setDetails(data.results);
  
  }
  useEffect(() => {
    getDataFromServer();
  } , [])
  
  





  return (
    <Card data = {details}/>
  );
}

export default App;
