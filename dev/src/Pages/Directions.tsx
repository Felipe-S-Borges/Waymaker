// Tela de confirmação e edição de trajeto
import styles from '../Styles/Directions.module.css';
import back from '../Assets/back_arrow.svg';
import map from '../Assets/map.png';
import track from '../Assets/target.svg';
import position_icon from '../Assets/position-icon.svg';
import walkTo_icon from '../Assets/walkTo_icon.svg';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';


import { Route } from '../Components/Route';
import { Stage } from '../Components/Stage';
import { Descritions } from '../Components/Descritions';



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
                    <Descritions icon={walkTo_icon} direction={'0'} />
                    <Descritions icon={onBoard_icon} direction={'1'} />
                    <Descritions icon={"P32"} direction={'1'}/>
                    <Descritions icon={"P345"} direction={'1'}/>
                    <Descritions icon={"P23"} direction={'1'}/>
                    <Descritions icon={offBoard_icon} direction={''} />
                    
                    

                </ol>

                

            </main>


        </div>
    );
}