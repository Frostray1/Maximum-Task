import styles from './AutoInfo.module.scss';
import Image from 'next/image';


const AutoInfo = ({ feedData }) => {
    console.log(feedData)
	const {
		
		engine,
		price,
		productionYear,
		equipmentVariantFuelType,
		equipmentVariantTransmissionType
	} = feedData;
	const carInfo =
		engine.engineCapacity +
		' / ' +
		engine.enginePower +
		'Л.С. / ' +
		equipmentVariantFuelType;
	return (
		<div className={styles.autoParameters}>
			<div className={styles.autoParametersItem}>
				<h5>{price.toLocaleString('ru')} </h5>
			</div>
			<div className={styles.autoParametersItem}>
				<Image
					className={styles.logo}
					src='/images/label.svg'
					width={39}
					height={42}
					alt='Description'
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
							src='/images/paramsIcon_1.svg'
							width={90}
							height={90}
							alt='Description'
							priority={true}
						/>
						<p>{productionYear} год выпуска</p>
					</li>
					<li>
						<Image
							className={styles.logo}
							src='/images/paramsIcon_2.svg'
							width={90}
							height={90}
							alt='Description'
							priority={true}
						/>
						<p>{carInfo}</p>
					</li>
					<li>
						<Image
							className={styles.logo}
							src='/images/paramsIcon_3.svg'
							width={90}
							height={90}
							alt='Description'
							priority={true}
						/>
						<p>КП - {equipmentVariantTransmissionType}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AutoInfo;
