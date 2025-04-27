"use client"
import Image from "next/image";
import styles from "./page.module.css";

import backgroundImage from '../../public/naan.jpg'
import Gallery from "./components/Gallery";
import Menu from './components/Menu'
import { useState ,createContext, useContext} from "react";
import useFetchDishes from "./components/ServerLogic/useFetchDishes";
import DishDisplay from "./components/DishDisplay/DishDisplay";

export const ThemeContext = createContext()

const backgroundImageUrl ='https://images.unsplash.com/photo-1593693401060-9fc28cf9e368?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
export default function Home() {
  
  const [dish,setDishes] = useState('')
  const {dishes,loading} =   useFetchDishes()
  function handleDishes(dish){
    setDishes(dish)
  }
  return (
    <div>
      <h1 className={styles.title}>Sona South Indian Restaurant</h1>
  
      <div style={{backgroundImage:'url(/kerala.avif)'}} className={styles.backgroundImage}>
        </div>
      <Gallery />
      <br/>
      {/* <Menu dishCallback={handleDishes}/> */}
    </div>
  );
}

export const useTheme = ()=>useContext(ThemeContext)
