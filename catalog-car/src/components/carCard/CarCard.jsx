import React, { useState } from 'react';
import styles from './CarCard.module.scss';
import Image from 'next/image';

const CarCard = ({ car }) => {
	const { photobank, feedData } = car;
	const { brandByClassifierName, equipmentVariantName, engine } = feedData;
	const carInfo =
		engine.engineCapacity + ' / ' + engine.enginePower + ' / ' + engine.engineTransmission;

	const carName = brandByClassifierName + equipmentVariantName;
	return (
		<div className={styles.carCard}>
			<Image
				src={photobank.imgs[0].url}
				width={440}
				height={292}
				alt='Description'
			/>
			<h4>{carName}</h4>
			<p> {carInfo}</p>
			<button>Подробнее</button>
		</div>
	);
};

export default CarCard;
