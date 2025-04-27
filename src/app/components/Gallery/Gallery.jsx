"use client";
import ImageGallery from "react-image-gallery";
import curry1 from "../../../../public/curry1.jpg";
import naan from "../../../../public/naan.jpg";
import styles from "./Gallery.module.css";

const images = [
  {
    original: "./chicken1.jpg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    loading: "lazy",
    originalAlt: "chicken",
    originalTitle: "Chicken",
  },
  {
    original: "./curry1.jpg",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    loading: "lazy",
    originalAlt: "Curry",
    originalTitle: "Curry",
    originalHeight: "500px",
    originalWidth: "500px",
    sizes: "100px",
  },
  {
    original: "./naan.jpg",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    loading: "lazy",
    originalAlt: "Naan",
    originalTitle: "Naan",
  },
];
const Gallery = () => {
  return (
    <div className={styles.container}>
      <ImageGallery items={images} priority={true} />
    </div>
  );
};
export default Gallery;
