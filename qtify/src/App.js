import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './Api/api';
import React, {useEffect, useState} from "react";
import { Outlet } from 'react-router-dom';


function App() {
  
  const [data, setData]=useState({});

  const generateData=(key,source)=>{
    source().then((data)=>{
      setData((prevData)=>{
       
        return {...prevData, [key]:data};
      });
    });
    
  };

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);

   
   
  },[]);

  const{topAlbums=[], newAlbums=[], songs=[]}= data;

  return (
    <div >
      <StyledEngineProvider injectFirst>    
      <Navbar searchData={[...topAlbums,...newAlbums]} />
      <Outlet context={{data: {topAlbums,newAlbums,songs}}}/>
      </StyledEngineProvider>
    </div>
  );
}

export default App;


