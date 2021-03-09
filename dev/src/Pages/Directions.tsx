// Tela de confirmação e edição de trajeto
import styles from '../Styles/Directions.module.css';
import back from '../Assets/back_arrow.svg';
import map from '../Assets/map.png';
import track from '../Assets/target.svg';
import position_icon from '../Assets/position-icon.svg';
import { Route } from '../Components/Route';
import { Stage } from '../Components/Stage';



export function Directions(){

    return (

        <div className={styles.directionsContainer}>

            <header>

                <div className={styles.topBar}>  

                   <button className={styles.iconButton} > <img src={back} /> </button>
                   <p className={styles.titleDirections}>
                        Direções
                    </p>
                   

                    
                </div>

                {/**Mapa com o trajeto marcado */}
                <div className={styles.mapsContainer}>

                   <img src={map} className={styles.maps} />

                </div>

                {/**Componte menu da barra lateral */}

                {/**Header de baixo */}
                <div className={styles.directionsBottomHeader}>

                <p> Primeira rota disponível</p> <span> 23min</span>

                </div>
                
               
            </header>

            {/**Rotas */}
            <main>

                <ol>
                    <Stage stage={0} />
                    <Stage stage={1}/>
                    
                    

                </ol>

                

            </main>


        </div>
    );
}