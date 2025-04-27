import styles from "./DishDisplay.module.css";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const DishDisplay = ({ name, url, addOrderCallBack }) => {
  function handleAddButton() {
    console.log("+button clicked", name);
    addOrderCallBack(name);
  }
  return (
    <div className={styles.item}>
      <h3>{name}</h3>
      <div className={styles.imageOrderButton}>
        <Image
          src={url}
          width={400}
          height={500}
          alt={name}
          priority={true}
          style={{ objectFit: "scale-down" }}
        />
        <button onClick={handleAddButton}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
export default DishDisplay;
