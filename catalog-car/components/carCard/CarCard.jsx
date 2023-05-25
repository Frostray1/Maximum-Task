import styles from './CarCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/Button';

const CarCard = ({ car, selectedBrand }) => {
	const { photobank, feedData } = car;
	const { brandByClassifierName, equipmentVariantName, engine } = feedData;
	const carInfo =
		engine.engineCapacity + ' / ' + engine.enginePower + ' Л.С. / ' + engine.engineTransmission;

	const carName = brandByClassifierName + equipmentVariantName;
  
	return (
		<div className={styles.carCard}>
			<Image
				src={photobank.imgs[0].url}
				width={440}
				height={292}
				alt='Description'
				priority={true}
			/>
			<h1>{carName}</h1>
			<p> {carInfo}</p>
			<Link href={`/${selectedBrand}/${car._id}`}><Button text={'Подробнее'}/></Link>
			
		</div>
	);
};

export default CarCard;
