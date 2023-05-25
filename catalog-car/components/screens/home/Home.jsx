import styles from "./Home.module.scss";
import Header from "@/components/header/Header";
import SortBrand from "@/components/sortBrand/SortBrand";
import Title from "@/components/title/Title";

const Home = () => {
  const brands = ["Chery", "Haval", "Geely", "Exeed", "Audi", "Kia", "Hyundai"];

  return (
    <>
      <Header />
      <div className={styles.mainWindow}>
        <div className={styles.container}>
          <Title/>
          <SortBrand brands={brands} />
        </div>
      </div>
    </>
  );
};

export default Home;
