import React from 'react'        
import styles from '/css-modules/Header.module.css'

const Header = () => {
    return(
        <header id={styles.headerContainer}>
            <div> 
                <h1 id={styles.logo}>baseballmaniac</h1>
            </div> 
        </header> 
    )
}  

export default Header 