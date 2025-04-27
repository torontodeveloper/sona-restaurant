"use client"
import {useContext, useEffect, useState} from 'react'
import styles from './page.module.css'
import { useTheme } from '../page'
import DishDisplay from '../components/DishDisplay/DishDisplay'
import OrderForm from '../components/InputForm/OrderForm'
import axios from 'axios'

const payload = {
        "quantity": 1,
        "item": "Biryani",
        "custName": "Angelina Jolie"
}
const Menu=()=>{
    const {dishes,loading} = useTheme()
    const [dishesAvailable,setDishesAvailable] = useState(dishes)
    const [itemOrdered,setItemOrdered] = useState([])
    function updateOrder(){
        console.log('updateOrder',itemOrdered)
        axios.post('http://localhost:8000/order/dish',payload).then(
            resp=>console.log('response',resp)
         ).catch(exception=>console.log('Exception occured',exception))
    }
    function itemOrderHandler(dishOrdered,name=''){
            console.log('dishOrdered********',dishOrdered,name)
            let tmpDishes = dishes
            tmpDishes = dishes.filter(dish=>dish.name.toLowerCase().startsWith(dishOrdered?.dishRequired?.toLowerCase()))
            updateOrder()
            console.log('tmpDishes,if block',tmpDishes)
            setDishesAvailable(tmpDishes)
            setItemOrdered(tmpDishes)
    }
   
    useEffect(()=>{
        console.log('useEffect****',itemOrdered)
        updateOrder()
    },[JSON.stringify(itemOrdered)])
    return(
        <div>
            <OrderForm orderCallback={itemOrderHandler}/>
            <ul className={styles.container}>
                {
                !loading && dishesAvailable?.map((dish,index)=>(
                    <DishDisplay {...dish} key={index} addOrderCallBack={itemOrdered}/>
                ))
                }
            </ul>
        </div>
    )
}
export default Menu