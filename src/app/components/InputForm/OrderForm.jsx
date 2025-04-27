"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./OrderForm.module.css";
import clsx from "clsx";

const OrderForm = ({ orderCallback }) => {
  const [itemOrdered, setItemOrdered] = useState("");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    orderCallback(data);
  }
  useEffect(() => {
    if (errors.dishRequired) {
      orderCallback("");
    }
  }, [errors.dishRequired]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      {errors.dishRequired && <label>Enter ur Order</label>}
      <input
        type="text"
        {...register("dishRequired", { required: true })}
        style={{}}
        className={clsx({ border: "solid 5px red" } ? errors.dishRequired : "")}
      />
      <div>{!errors.dishRequired && <p>Plz Enter Dish to Order</p>}</div>
      <br />
      <input type="submit" style={{ width: "4rem" }} />
    </form>
  );
};
export default OrderForm;
