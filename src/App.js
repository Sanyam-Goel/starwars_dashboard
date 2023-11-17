import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar';
import Home from './pages/Home'
import { Grid } from '@material-ui/core';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Films from './pages/Films';
import People from './pages/People';
import First from './component/First';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';


import './App.css'



export default function App() {
 
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
      <Grid container spacing={5} >
           <Grid item xs={12} md={2}>
           <Sidebar/>
           </Grid>
           <Grid item xs={12} md={10}>
              <Home>
              <Routes>
                 <Route path="/" element={<First/>}></Route>
                 <Route path="/films" element={<Films/>}></Route>
                 <Route path="/people" element={<People/>}></Route>
                 <Route path="/planets" element={<Planets/>}></Route>
                 <Route path="/species" element={<Species/>}></Route>
                 <Route path="/starships" element={<Starships/>}></Route>
                 <Route path="/vehicles" element={<Vehicles/>}></Route>
              </Routes>
              </Home>
           </Grid>
      </Grid>
      </BrowserRouter>
      
      
    </div>
  )
}
