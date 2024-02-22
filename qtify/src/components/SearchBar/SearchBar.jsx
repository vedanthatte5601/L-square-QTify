import React from "react";
import {ReactComponent as SearchIcon} from  "../../assets/search-icon.svg"
import styles from "./SearchBar.module.css";


const SearchBar = (props) => {

    return (
        <form className={styles.wrapper}>
            <input
                className={styles.search}
                type="text"
                placeholder={props.search}
                value=""
            />
            <button className={styles.searchButton} type="submit"><SearchIcon /></button>
        </form>
    );
}

export default SearchBar;