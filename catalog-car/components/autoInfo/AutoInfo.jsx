import styles from './AutoInfo.module.scss';
import AutoInfoIcons from './AutoInfoIcons';
import { Roboto} from 'next/font/google';
 
const roboto = Roboto({
  weight: '700',
  style: ['normal'],
  subsets: ['latin'],
});

const AutoInfo = ({ feedData }) => {
	const {
		engine,
		price,
		productionYear,
		equipmentVariantFuelType,
		equipmentVariantTransmissionType
	} = feedData;
	const carInfo = `${engine.engineCapacity} / ${engine.enginePower} Л.С. / ${equipmentVariantFuelType}`;

	return (
		<div className={styles.autoParameters}>
			<div className={styles.autoParametersItem}>
				<h5>{price.toLocaleString('ru')} <span className={roboto.className}>&#8381;</span> </h5>
			</div>
			<div className={styles.autoParametersItem}>
				<AutoInfoIcons link={'/images/label.svg'} width={39} height={42} />
				<h4>Гарантия юр. чистоты</h4>
			</div>
			<h3>Характеристики</h3>
			<div className={styles.paramsList}>
				<ul>
					<li>
						<AutoInfoIcons link={'/images/paramsIcon_1.svg'} />
						<p>{productionYear} год выпуска</p>
					</li>
					<li>
						<AutoInfoIcons link={'/images/paramsIcon_2.svg'} />
						<p>{carInfo}</p>
					</li>
					<li>
						<AutoInfoIcons link={'/images/paramsIcon_3.svg'} />
						<p>КП - {equipmentVariantTransmissionType}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AutoInfo;
