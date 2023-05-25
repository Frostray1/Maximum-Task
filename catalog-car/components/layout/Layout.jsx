import Header from '../header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
