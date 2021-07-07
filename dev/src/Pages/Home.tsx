//Págiana Home principal
import styles from '../Styles/Home.module.css';
import position_icon from '../Assets/position-icon.svg';
import React from 'react';
import { Messager } from '../Components/Messager';
import { Favorite } from '../Components/Favorite';
import menu from '../Assets/menu-fill.svg';
import { useHistory } from 'react-router';

export function Home() {

    const history = useHistory();

    function handleClickSearch() {
        history.push("/search")
    }

    return(

        <div className={styles.homeContainer}>
            
            <header>
                <div>
                    <button className={styles.menu}><img src={menu} alt="menu icon" /></button>
                    <span>Vitória - ES</span>
                </div>
                <div>
                    <button className={styles.searchLocation} onClick={handleClickSearch} >
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