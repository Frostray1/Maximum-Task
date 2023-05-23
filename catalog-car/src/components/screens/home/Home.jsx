import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import CarCard from '@/components/carCard/CarCard';
import Header from '@/components/header/Header';

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
	const [cars, setCars] = useState([]);
	const [selectedBrand, setSelectedBrand] = useState('');

	useEffect(() => {
		fetchCars(selectedBrand);
	}, [selectedBrand]);

	const fetchCars = async brand => {
		const response = await fetch(
			`https://maximum.expert/api/stock-test?brand=${brand}`
		);
		const data = await response.json();
		setCars(data.list);
	};

	const handleBrandFilter = brand => {
		console.log(brand);
		setSelectedBrand(brand);
	};

	return (
		<div className={styles.home}>
			<Header />
			<div className={styles.mainWindow}>
				<div className={styles.container}>
					<h3>Автомобили CHERRY в СПБ</h3>
					<div className={styles.sortAndProduct}>
						<div className={styles.sortList}>
							<label>Бренд</label>
							<div className={styles.sortButton}>
								{brands.map(brand => (
									<button
										key={brand}
										onClick={() => handleBrandFilter(brand)}
									>
										{brand}
									</button>
								))}
							</div>
						</div>
						<div className={styles.products}>
							{cars.map(car => (
								<CarCard key={car._id} car={car} />
							))}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
