import React from 'react';
import styles from './AutoInfo.module.scss';
import Image from 'next/image';

const AutoInfoIcons = ({ link, width, height }) => {
	return (
		<Image
			src={link}
			width={width ? width : 90}
			height={height ? height : 90}
			alt='icons'
			priority={true}
		/>
	);
};

export default AutoInfoIcons;
