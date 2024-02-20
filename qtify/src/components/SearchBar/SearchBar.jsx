import React from "react";
import {ReactComponent as SearchIcon} from  "../../assets/search-icon.svg"
import styles from "./SearchBar.module.css";

function SearchBar(){
    return (
        <div className={styles.container}>
            <input type="search" className={styles.search} placeholder="Enter an album"  />
            <button className={styles.searchButton} type="submit"><SearchIcon /></button>
        </div>
    );
}

export default SearchBar;