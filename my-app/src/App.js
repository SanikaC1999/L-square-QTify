import './App.css';
import React, { useEffect, useState } from 'react';
import Nav from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { fetchNewAlbums , fetchSongs ,fetchTopAlbums } from './api/api';

function App() {
  const [searchData, setSearchData] = useState();
  const [data,setData] = useState({});

  const generateData = (key, source) => {
    source()
      .then((data) => {
        setData((prevData) => {
          return { ...prevData, [key]: data };
        });
      })
      .catch((error) => {
        console.error(`Error fetching ${key}:`, error);
      });
  };
  
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);
  
  const {topAlbums=[] , newAlbums=[] ,songs=[]} = data

  return (
    <>
    <div>
      <Nav />
      <Outlet context={{data:{topAlbums ,newAlbums ,songs}}}/>
    </div>
    </>
  );
}

export default App;
