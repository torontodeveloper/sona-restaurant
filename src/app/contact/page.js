"use client"
import {useContext} from 'react'
import styles from './page.module.css'
import { useTheme } from '../page'
import DishDisplay from '../components/DishDisplay/DishDisplay'

const Contact =()=>{
    return(
        <div className={styles.container}>
            <div>
            <p>
            business hours
            </p>
            <p>

            Sunday – Thursday
            </p>
            <p>

            11:30 am – 3:00 pm
            </p>
            <p>

            5:30 pm – 11:30 pm
            </p>
            <p>
            Friday – Saturday
            </p>
            <p>
            11:30 am – 3:00 pm
            </p>
            <p>
            5:30 pm – 12:00 am
            </p>
            <p>

            Dress Code
            Business Casual
            </p>
            </div>
            <pre>
                <p>
            66 Hudson Street
            New York NY 10013
                </p>
                <p>

            212.775.9000
                </p>
                <p>
            tamarindnyc@gmail.com
            212.775.9001
                </p>
            </pre>
        </div>
    )
}
export default Contact