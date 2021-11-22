import React from 'react'
import MainNavbar from '../components/navbar/navbar';
import ShoppingProducts from '../components/shopping-products/shopping-products';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div className={styles.main_container}>
            <MainNavbar />
            <ShoppingProducts />
        </div>
    )
}

export default Home;
