"use client";
import { useState } from "react";
import styles from "./Menu.module.css";

const Menu = ({ dishCallback }) => {
  const [dish, setDish] = useState("");
  function handleDish(event) {
    setDish(event.target.value);
  }
  function handleForm(event) {
    event.preventDefault();
    console.log("submit button clicked", event.target.value);
    dishCallback(dish);
  }
  return (
    <form className={styles.container} onSubmit={handleForm}>
      <label htmlFor="dish">Plz Enter ur Dish plz</label>
      <br />
      <input type="text" id="dish" value={dish} onChange={handleDish} />
      <br />
      <button type="submit" onClick={handleForm}>
        Load Dishes
      </button>
    </form>
  );
};
export default Menu;
