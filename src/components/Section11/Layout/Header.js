import mealsImage from '../../../assets/img.png'
import styles from './Header.module.css'

const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food !"/>
      </div>
    </>
  )
}

export default Header