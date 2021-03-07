// Tela de confirmação e edição de trajeto
import styles from '../Styles/RoutesDisplay.module.css';
import back from '../Assets/back_arrow.svg';
import switchArrow from '../Assets/switch.svg';
import track from '../Assets/target.svg';
import position_icon from '../Assets/position-icon.svg';
import { Route } from '../Components/Route';

export function RoutesDisplay(){

    return (

        <div className={styles.DesinyConfirmContainer}>

            <header>

                <div>  

                   <button className={styles.iconButton} > <img src={back} /> </button>
                   <button className={styles.imputButton} >
                       <img src={track} />
                       Sua localização atual
                    </button>
                    
                </div>


                <div>  

                    <button className={styles.iconButton} > <img src={switchArrow} /> </button>
                    <button className={styles.imputButton} >
                        <img src={position_icon} />
                        Shopping das gardenias...
                    </button>


                </div>


                <div>   

                    <button className={styles.filtersButton} >Escolher filtros de busca</button>

                </div>
                <div className={styles.displayHeader}>
                    <p> Foram encontradas 2 rotas disponíveis</p>
                </div>


            </header>

            {/**Rotas */}
            <main>

                <Route />
                <Route />
                <Route />
                <Route />

            </main>


        </div>
    );
}