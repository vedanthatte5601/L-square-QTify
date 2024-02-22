import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "../Logo/Logo.module.css"
export default function Logo(){
    return (
    <div className={styles.logoDiv}>
    <img src={LogoImage} alt="QTify Logo" width={70}/>
    </div> 
     )
    
}