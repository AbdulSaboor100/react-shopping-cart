import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Util } from 'reactstrap';
import { GlobalContext } from '../../context/context';
import styles from './navbar.module.scss';

const MainNavbar = () => {
    let {state , dispatch} = useContext(GlobalContext);
    let [initailState , setInitailState] = useState(false);

    
    function cartBtn(e){

        console.log(e.parentNode.parentNode.children[1].style.display = "block")
        setInitailState(true)

    }

    function cartBtnOff(e){
        console.log(e.parentNode.parentNode.children[1].style.display = "none")
        setInitailState(false)
    }

    function remove(e){
        e.parentNode.remove()
        state.addToCart.splice(1 - e.id, 1);
    }



    return (
        <div className={styles.main_navbar}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.navbar}>
                        <div className={styles.div1}>
                            <h4>Store</h4>
                        </div>
                        <div className={styles.div2}>
                            <input type="text" />
                        </div>
                        <div className={styles.div3}>
                            {/* <p>Cart</p> */}
                            {initailState === true ? <p onClick={(e)=>{cartBtnOff(e.target)}}><i class="fas fa-shopping-cart"></i></p> : <p onClick={(e)=>{cartBtn(e.target)}}><i class="fas fa-shopping-cart">{state.addToCart.length}</i></p>}
                            <div className={styles.hide_bar}>
                                
                                   {
                                       state.addToCart.map(function(item ,index){
                                           console.log(state)
                                           return(
                                               <div className={styles.main_carts}>
                                                   <img src={item.image} />
                                                   <h4>{item.name}</h4>
                                                   <p>{item.price}</p>
                                                   <button id={item.id} onClick={(e)=>{remove(e.target)}}>remove</button>
                                               </div>
                                           )
                                       })
                                   }
                                
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainNavbar;
