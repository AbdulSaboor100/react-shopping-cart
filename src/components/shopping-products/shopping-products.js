import React, { useContext } from 'react'
import { Col, Row } from 'reactstrap';
import { GlobalContext } from '../../context/context';
import styles from './shopping-products.module.scss';

const ShoppingProducts = () => {
    let {state , dispatch} = useContext(GlobalContext);


    

    return (
        <div className={styles.main_shopping_products}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.products}>
                        <Row>
                            {
                                state.products.map(function(item,index){
                                    return(
                                        <Col sm={12} md={4}>
                                            <div className={styles.main_One}> 
                                                <img src={item.image} />
                                                <h4>{item.name}</h4>
                                                <p>{item.price}</p>
                                                <p>{item.numReviews}</p>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShoppingProducts;
