import React from 'react'

import styles from './ButtonCta.module.css'
const ButtonCta = ({text}) => {
    return (
        <button className={styles.btn}>{text}</button>
    )
}

export default ButtonCta
