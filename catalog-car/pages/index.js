import SortBrand from '@/components/sortBrand/SortBrand';
import Title from '@/components/title/Title';
import styles from './index.module.scss';


const Home = () => {
	const brands = [
		'Chery',
		'Haval',
		'Geely',
		'Exeed',
		'Audi',
		'Kia',
		'Hyundai'
	];

	return (
		<>
			<section className={styles.container}>
				<Title />
				<SortBrand brands={brands} />
			</section>
		</>
	);
};

export default Home;
