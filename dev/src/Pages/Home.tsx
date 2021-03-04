//Págiana Home principal
import styles from '../Styles/Home.module.css';
import position_icon from '../Assets/position-icon.svg';
import React from 'react';
import { Messager } from '../Components/Messager';
import { Favorite } from '../Components/Favorite';

export function Home() {

    return(

        <div className={styles.homeContainer}>
            
            <header>
                <div>
                    <span>menu</span>
                    <span>Vitória - ES</span>
                </div>
                <div>
                    <button className={styles.searchLocation} >
                         <img src={position_icon} width='18' />
                         Para onde deseja ir?
                    </button>
                    <button className={styles.shareLocation}> Compartilar localização com amigos</button>

                </div>

            </header>

            <nav>
                <span> Favoritos</span>
                <span> Adicionar</span>

            </nav>

            <main>
                {/**Componente de menssagem vaizia */}
                {/*<Messager />*/}
                {/**Componente de favoritos */}
                <div><Favorite /> </div>
                <div><Favorite /> </div>
                <div><Favorite /> </div>
                
                
            </main>
        </div>



    );
}