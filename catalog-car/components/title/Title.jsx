import styles from './Title.module.scss'

const Title = ({selectedBrand}) => {
  return (
    <h1 className={styles.title}>Автомобили {selectedBrand ? selectedBrand : ''} в СПБ</h1>
  )
}

export default Title