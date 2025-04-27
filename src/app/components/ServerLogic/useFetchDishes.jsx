"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDishes = () => {
  const url = "http://localhost:8000/dishes";
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchDishes() {
    const resp = await axios.get(url, {
      headers: {
        AccessControlAllowOrigin: "*",
      },
    });
    if (resp?.data) {
      setDishes(resp?.data);
    }
  }
  useEffect(() => {
    fetchDishes();
  }, []);
  return { dishes };
};
export default useFetchDishes;
