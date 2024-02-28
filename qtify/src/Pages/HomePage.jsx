import React from "react";
import styles from "../Pages/HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import Section from "../components/Section/Section";
import Hero from "../components/Hero/Hero";
import { fetchFilters } from "../Api/api";

function HomePage(){
const {data}= useOutletContext();
const{topAlbums, newAlbums, songs}= data;

    return(
        <div>
           <Hero/>
           <div className={styles.wrapper}> 
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Section title="Songs" data={songs}  filterSource={fetchFilters} type="song" />
           </div>
        </div>
    )
}

export default HomePage;