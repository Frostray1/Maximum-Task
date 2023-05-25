import React from 'react';
import styles from './SortBrand.module.scss';
import Link from 'next/link';

const SortBrand = ({ brands }) => {
	return (
		<div className={styles.sortList}>
			<label>Бренд</label>
			<div className={styles.sortButton}>
				{brands.map(brand => (
					<Link key={brand} href={`/${brand}`}>
						<button>{brand}</button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SortBrand;
