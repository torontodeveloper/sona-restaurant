"use client"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { ThemeContext } from './page';
import Header from './components/Header/Header';
import useFetchDishes from "./components/ServerLogic/useFetchDishes";

export default function RootLayout({ children }) {
  const [dish, setDish] = useState(''); 
  const {dishes,loading} =   useFetchDishes()
  return (
    <html lang="en">
      <body>
        <ThemeContext.Provider value={{dish,dishes,loading}}>
        <Header dish={dish} dishes={dishes}/>
        {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
