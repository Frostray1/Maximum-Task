import Header from "@/components/header/Header";
import styles from "./PageAuto.module.scss";
import Image from "next/image";
import Slider from "@/components/slider/Slider";
import Promotion from "@/components/promotion/Promotion";

const PageAuto = ({ carData }) => {
  console.log(carData);
  const { photobank, feedData } = carData;
  const {
    brandByClassifierName,
    equipmentVariantName,
    engine,
    vin,
    price,
    productionYear,
    equipmentVariantFuelType,
    equipmentVariantTransmissionType,
  } = feedData;

  const carInfo =
    engine.engineCapacity +
    " / " +
    engine.enginePower +
    "Л.С. / " +
    equipmentVariantFuelType;

  const carName = brandByClassifierName + equipmentVariantName;

  return (
    <>
      <Header />
      <div className={styles.pageAutoWindow}>
        <div className={styles.container}>
          <h2>{carName}</h2>
          <p>{vin}</p>
          <div className={styles.autoInfo}>
            <div className={styles.autoParameters}>
              <div className={styles.autoParametersItem}>
                <h5>{price.toLocaleString("ru")} </h5>
              </div>
              <div className={styles.autoParametersItem}>
                <Image
                  className={styles.logo}
                  src="/images/label.svg"
                  width={39}
                  height={42}
                  alt="Description"
                  priority={true}
                />
                <h4>Гарантия юр. чистоты</h4>
              </div>

              <h3>Характеристики</h3>
              <div className={styles.paramsList}>
                <ul>
                  <li>
                    <Image
                      className={styles.logo}
                      src="/images/paramsIcon_1.svg"
                      width={90}
                      height={90}
                      alt="Description"
                      priority={true}
                    />
                    <p>{productionYear} год выпуска</p>
                  </li>
                  <li>
                    <Image
                      className={styles.logo}
                      src="/images/paramsIcon_2.svg"
                      width={90}
                      height={90}
                      alt="Description"
                      priority={true}
                    />
                    <p>{carInfo}</p>
                  </li>
                  <li>
                    <Image
                      className={styles.logo}
                      src="/images/paramsIcon_3.svg"
                      width={90}
                      height={90}
                      alt="Description"
                      priority={true}
                    />
                    <p>КП - {equipmentVariantTransmissionType}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.slider}>
              <Slider photobank={photobank.imgs} />
            </div>
          </div>
        </div>
       
      </div>
      <Promotion />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://maximum.expert/api/stock-test?brand=${params.brand}`
  );
  const data = await response.json();
  const carData = data.list.find((item) => item._id === params.id);

  return { props: { carData } };
}

export default PageAuto;
