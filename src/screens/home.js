import React from 'react'
import ShoppingProducts from '../components/shopping-products/shopping-products';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div className={styles.main_container}>
            <ShoppingProducts />
        </div>
    )
}

export default Home;
