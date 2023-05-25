import SortBrand from '@/components/sortBrand/SortBrand';
import Title from '@/components/title/Title';
import styles from './index.module.scss';
import brands from '../data/brands';

const Home = () => {
	

	return (
		<>
			<div className={styles.container}>
				<Title />
				<SortBrand brands={brands} />
			</div>
		</>
	);
};

export default Home;
