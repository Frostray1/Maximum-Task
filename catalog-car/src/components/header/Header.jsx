import React from 'react';
import styles from './Header.module.scss'
import Image from 'next/image';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Image
					className={styles.logo}
					src='/images/logo.svg'
					width={154}
					height={42}
					alt='Description'
					priority={true}
				/>
				<Image
					className={styles.line}
					src='/images/line.svg'
					width={2}
					height={68}
					alt='Description'
					priority={true}
				/>
				<h3>Официальный диллер Максимум</h3>
			</div>
		</div>
	);
};

export default Header;
