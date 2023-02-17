import mealsImage from '../../assets/img.png'
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals App</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food !"/>
      </div>
    </>
  )
}

export default Header