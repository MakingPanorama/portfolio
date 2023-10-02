'use client'

import styles from './navbar.module.css';
import {useRef, useState} from 'react';
import { useMediaQuery } from 'react-responsive';

export default function NavBar() {
    const dropdownMenu = useRef(null);
    const [isVisible, setVisible] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 1224px)'
    })
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.line}>
                        <div className={styles.title}>
                            <p>
                                {isMobile ? "MEME" : "MEMETHROW"}
                            </p>
                        </div>
                        <div className={styles.forPhone} onClick={() => {
                            setVisible(!isVisible);
                        }}>
                            <div ref={dropdownMenu} className={`${isVisible === true ? "" : styles.hidden} ${styles.dropdown}`}>
                                <a href="/">Home</a>
                                <a href="/product">Product</a>
                                <a href="/support">Support</a>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <a id={styles.home}>Home</a>        
                        </div>
                        <div className={styles.category}>
                            <a id={styles.products}>Products</a>        
                        </div>
                        <div className={styles.category}>
                            <a id={styles.about}>About</a>        
                        </div>
                        <div className={styles.category}>
                            <a id={styles.faq}>Support</a>        
                        </div>
                        <div className={styles.category}>
                            <a id={styles.blog}>Blog</a>        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}