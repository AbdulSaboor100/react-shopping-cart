import React, { useContext } from 'react'
import { Col, Row } from 'reactstrap';
import { GlobalContext } from '../../context/context';
import styles from './shopping-products.module.scss';

const ShoppingProducts = () => {
    let {state , dispatch} = useContext(GlobalContext);

    function addToCart(e){
        let productId = e.parentNode;
        let dataObj = {
            image : productId.children[0].currentSrc,
            name : productId.children[1].innerText,
            price : productId.children[2].innerText,
            id : e.id
        };
        dispatch({type:"ADD_TO_CART" , payload : dataObj})
  
        
    }
    

    return (
        <div className={styles.main_shopping_products}>
            <Row >
                <Col sm={12} md={12} >
                    <div className={styles.products}>
                        <Row>
                            {
                                state.products.map(function(item,index){
                                    return(
                                        <Col sm={12} md={4}>
                                            <div className={styles.main_One} id={item._id} key={item._id+index}> 
                                                <img src={item.image} />
                                                <h4>{item.name}</h4>
                                                <p>${item.price}</p>
                                                {/* <ul>
                                                    
                                                </ul> */}
                                                <p>{item.numReviews}</p>
                                                <p><i class="fas fa-star"></i>  </p>
                                                <button id={item._id} onClick={(e)=>{addToCart(e.target)}}>Add to Cart</button>
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
