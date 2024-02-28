import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
//import { Link } from "react-router-dom";


function Navbar({searchData}){
    return(
        <nav className={styles.navbar}>
            
            <Logo />
            
            <SearchBar placeholder={"Search a album of your choice"}
            searchData={searchData}></SearchBar>
            <Button> Give Feedback</Button>    
        </nav>
    )
}

export default Navbar;
