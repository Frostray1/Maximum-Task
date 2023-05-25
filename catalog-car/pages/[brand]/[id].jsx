import styles from './PageAuto.module.scss';
import Slider from '@/components/slider/Slider';
import Promotion from '@/components/promotion/Promotion';
import AutoInfo from '@/components/autoInfo/AutoInfo';

const PageAuto = ({ carData }) => {
	const { photobank, feedData } = carData;
	const { vin, brandByClassifierName, equipmentVariantName } = feedData;
	const carName = brandByClassifierName + equipmentVariantName;

	return (
		<>
			<section className={styles.container}>
				<div className={styles.pageAutoWindow}>
					<h2>{carName}</h2>
					<p>{vin}</p>
					<div className={styles.autoInfo}>
						<AutoInfo feedData={feedData} />
						<div className={styles.slider}>
							<Slider photobank={photobank.imgs} />
						</div>
					</div>
				</div>
			</section>
			<Promotion />
		</>
	);
};

export async function getServerSideProps({ params }) {
	const response = await fetch(
		`https://maximum.expert/api/stock-test?brand=${params.brand}`
	);
	const data = await response.json();
	const carData = data.list.find(item => item._id === params.id);

	return { props: { carData } };
}

export default PageAuto;
