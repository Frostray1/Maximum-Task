import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import Image from 'next/image';
import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Slider({ photobank }) {
	return (
		<Swiper
			className={styles.swiper}
			spaceBetween={50}
			modules={[Pagination, A11y]}
			pagination={{
				clickable: true,
				el: `.${styles['swiper-pagination']}`
			}}
		>
			{photobank.map(item => (
				<SwiperSlide key={item._id}>
					<Image
						src={item.url}
						width={876}
						height={719}
						alt='Description'
						priority={true}
					/>
				</SwiperSlide>
			))}
			<div className={styles['swiper-pagination']}></div>
		</Swiper>
	);
}
