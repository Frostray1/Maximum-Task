import styles from './BrandPage.module.scss';
import CarCard from '@/components/carCard/CarCard';
import Header from '@/components/header/Header';

import SortBrand from '@/components/sortBrand/SortBrand';
import Title from '@/components/title/Title';

const BrandPage = ({ cars, selectedBrand }) => {
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
		<section className={styles.container}>

		<div className={styles.brandPage}>
			<Title selectedBrand={selectedBrand} />
			<div className={styles.sortAndProduct}>
				<SortBrand brands={brands} />
				<div className={styles.products}>
					{cars.map(car => (
						<CarCard
							key={car._id}
							car={car}
							selectedBrand={selectedBrand}
						/>
					))}
				</div>
			</div>
		</div>
		</section>
	);
};

export async function getServerSideProps(context) {
	const { brand } = context.params;

	const response = await fetch(
		`https://maximum.expert/api/stock-test?brand=${brand}`
	);
	const data = await response.json();

	return {
		props: {
			cars: data.list,
			selectedBrand: brand
		}
	};
}

export default BrandPage;
